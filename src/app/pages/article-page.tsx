import { useParams, Link } from "react-router";
import { blogPosts } from "../data/blog-posts";
import { BlogCard } from "../components/blog-card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

import {
  Calendar,
  Clock,
  User,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Link as LinkIcon,
} from "lucide-react";

import { useState } from "react";

export default function ArticlePage() {
  const { id } = useParams();
  const article = blogPosts.find((post) => post.id === id);

  const [copiedLink, setCopiedLink] = useState(false);

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${currentUrl}&text=${article?.title}`,
      "_blank"
    );
  };

  const shareLinkedin = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`,
      "_blank"
    );
  };

  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
      "_blank"
    );
  };

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>

          <Link to="/blog">
            <Button className="bg-[#FF7A00] text-white">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((post) => post.id !== id && post.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen">

      {/* Top Advertisement */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="border rounded-xl p-6 text-center">
          <p className="text-xs mb-2">Advertisement</p>

          <div className="aspect-[728/90] bg-muted rounded-lg flex items-center justify-center">
            Google AdSense 728x90
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6">

        {/* Category */}
        <Badge className="mb-4 bg-[#FF7A00] text-white">
          {article.category}
        </Badge>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">

          <div className="flex items-center gap-2">
            <User size={16} />
            {article.author}
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={16} />
            {article.date}
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} />
            {article.readTime}
          </div>

        </div>

        {/* Share Buttons */}
        <div className="flex items-center gap-3 border-b pb-6 mb-6">

          <span className="flex items-center gap-2 text-sm font-semibold">
            <Share2 size={16} />
            Share
          </span>

          <Button size="sm" variant="outline" onClick={shareTwitter}>
            <Twitter size={16} />
          </Button>

          <Button size="sm" variant="outline" onClick={shareLinkedin}>
            <Linkedin size={16} />
          </Button>

          <Button size="sm" variant="outline" onClick={shareFacebook}>
            <Facebook size={16} />
          </Button>

          <Button size="sm" variant="outline" onClick={handleCopyLink}>
            <LinkIcon size={16} />
          </Button>

        </div>

        {/* Featured Image */}
        <img
          src={article.image}
          alt={article.title}
          className="rounded-2xl mb-10 w-full h-[400px] object-cover"
        />

        {/* Article Content */}
        <div className="prose max-w-none leading-relaxed">

          {article.content.split("\n\n").map((paragraph, index) => {

            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={index}>
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }

            if (paragraph.startsWith("```")) {
              const code = paragraph.replace(/```\w*\n?|\n?```/g, "");

              return (
                <pre
                  key={index}
                  className="bg-muted p-5 rounded-lg overflow-x-auto"
                >
                  <code>{code}</code>
                </pre>
              );
            }

            return <p key={index}>{paragraph}</p>;

          })}

        </div>

        {/* Mid Article Advertisement */}
        <section className="my-12 border rounded-xl p-6 text-center">
          <p className="text-xs mb-2">Advertisement</p>

          <div className="aspect-square max-w-[300px] mx-auto bg-muted rounded-lg flex items-center justify-center">
            Google AdSense 300x300
          </div>
        </section>

      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mt-16">

          <h2 className="text-2xl font-bold mb-6">
            Related Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>

        </section>
      )}

      {/* Bottom Advertisement */}
      <section className="max-w-5xl mx-auto px-6 my-16">
        <div className="border rounded-xl p-8 text-center">
          <p className="text-sm mb-3">Advertisement</p>

          <div className="aspect-[728/90] bg-muted rounded-lg flex items-center justify-center">
            Google AdSense 728x90
          </div>
        </div>
      </section>

    </div>
  );
}