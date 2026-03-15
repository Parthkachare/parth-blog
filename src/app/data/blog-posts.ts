/* blog-posts.ts */

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Modern React Applications with TypeScript",
    excerpt:
      "Learn how to leverage TypeScript to build scalable and maintainable React applications with best practices.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    category: "React",
    date: "Mar 12, 2026",
    readTime: "8 min read",
    author: "Parth Kachare",
    content: `
## Introduction

React with TypeScript provides powerful developer experience and safer code.

## Why TypeScript

TypeScript helps detect bugs early and improves code maintainability.

## Example

\`\`\`typescript
const message: string = "Hello React + TypeScript";
console.log(message);
\`\`\`

## Conclusion

Using TypeScript with React significantly improves scalability and maintainability.
`,
  },

  {
    id: "2",
    title: "Creating a Gamified Portfolio Website",
    excerpt:
      "How to build an interactive portfolio experience that keeps visitors engaged.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    category: "Web Development",
    date: "Mar 14, 2026",
    readTime: "6 min read",
    author: "Parth Kachare",
    content: `
## Introduction

Gamified portfolios create memorable user experiences.

## Key Elements

Interactive components, animations, and challenges.

## Example

\`\`\`javascript
function startGame() {
  console.log("Game started");
}
\`\`\`

## Conclusion

Interactive design helps your portfolio stand out.
`,
  },

  {
    id: "3",
    title: "How to Build a Typing Speed Challenge with JavaScript",
    excerpt:
      "Build a fun typing speed test game using JavaScript and React.",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
    category: "JavaScript",
    date: "Mar 15, 2026",
    readTime: "5 min read",
    author: "Parth Kachare",
    content: `
## Introduction

Typing games are a fun way to practice JavaScript logic.

## Implementation

Track user keystrokes and calculate typing speed.

## Example

\`\`\`javascript
let wordsTyped = 50;
let time = 60;

let wpm = (wordsTyped / time) * 60;
console.log(wpm);
\`\`\`

## Conclusion

Small interactive projects improve coding skills.
`,
  },
];