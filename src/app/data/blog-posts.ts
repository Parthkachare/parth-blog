/* blog-posts.ts */

export interface BlogPost {
  featured: any;
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
  featured: true, 
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
    featured: true,
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
    featured: true,
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

{
  id: "4",
  title: "10 Figma Tips Every UI Designer Should Know",
  excerpt:
    "Discover 10 powerful Figma tips that help UI designers work faster, build better design systems, and create scalable interfaces.",
  image:
    "https://images.unsplash.com/photo-1626785774573-4b799315345d",
  category: "UI/UX",
  date: "Mar 16, 2026",
  readTime: "10 min read",
  author: "Parth Kachare",
  featured: true,
  content: `
## Introduction

Figma has quickly become one of the most powerful and widely used tools in the UI/UX design industry. Its cloud-based nature, collaboration features, and powerful design capabilities make it a favorite among designers and product teams.

Whether you're a beginner or an experienced designer, mastering a few essential techniques in Figma can significantly improve your workflow and productivity.

In this article, we explore 10 practical Figma tips every UI designer should know.

---

## 1. Use Auto Layout for Responsive Design

Auto Layout allows designers to create flexible UI components that automatically adjust spacing and padding when content changes.

Example:

Login → small button  
Continue with Google → larger button automatically

---

## 2. Create Reusable Components

Components ensure consistency across designs.

Common components include:

• Buttons  
• Navigation bars  
• Cards  
• Input fields  
• Icons  

Updating the master component automatically updates every instance.

---

## 3. Use Variants for Component States

Variants allow you to manage multiple component states such as:

Default  
Hover  
Pressed  
Disabled

This makes it easier for developers to understand UI behavior.

---

## 4. Use Constraints for Responsive Layouts

Constraints define how elements behave when screen sizes change.

Example:  
A logo stays aligned left while a login button stays aligned right.

---

## 5. Use Styles for Colors and Typography

Create global styles for:

• Colors  
• Text styles  
• Shadows  
• Grid layouts  

Updating the style updates the entire design system instantly.

---

## 6. Organize Layers and Frames

Always name layers properly.

Good naming:

Navbar  
Hero Section  
Primary Button

Avoid names like:

Rectangle 21  
Frame 45

---

## 7. Use the Figma Community

The Figma Community offers free:

• UI kits  
• Icons  
• Design systems  
• Illustrations  
• Templates

Studying community files can improve your design skills.

---

## 8. Use Plugins to Speed Up Workflow

Useful plugins:

Unsplash – images  
Iconify – icon libraries  
Content Reel – placeholder content  
Autoflow – user flows  
Stark – accessibility testing

Plugins help automate repetitive tasks.

---

## 9. Use Prototyping to Test User Flows

Figma allows interactive prototypes.

Example flow:

Product Page → Cart → Checkout → Payment → Order Confirmation

This helps identify usability issues before development begins.

---

## 10. Use Comments for Collaboration

Figma supports real-time feedback through comments.

Example comment:

"Can we increase the button size here?"

Because the comment is attached to the UI element, designers know exactly what needs to change.

---

## Conclusion

Figma has transformed how modern design teams collaborate and build digital products.

By mastering features like Auto Layout, Components, Variants, Constraints, Styles, and Prototyping, designers can build scalable and efficient workflows.

The more comfortable you become with these features, the faster and more effective your design process will be.
`,
},
{
  id: "5",
  title: "Top 10 UI/UX Design Trends in 2026",
  excerpt:
    "Explore the latest UI/UX trends shaping modern digital products, from minimal design to AI-driven experiences.",
  image:
    "https://images.unsplash.com/photo-1559028012-481c04fa702d",
  category: "UI/UX",
  date: "Apr 1, 2026",
  readTime: "7 min read",
  author: "Parth Kachare",
  featured: false,
  content: `
## Introduction

UI/UX design is constantly evolving. In 2026, the focus is on simplicity, personalization, and immersive user experiences.

## 1. Minimalistic Design

Clean layouts with less clutter improve usability and focus.

## 2. Dark Mode

Dark mode enhances readability and reduces eye strain.

## 3. AI Personalization

Apps now adapt content based on user behavior.

## 4. Micro-Interactions

Small animations improve engagement and feedback.

## 5. Motion UI

Smooth transitions make apps feel modern.

## Conclusion

UI/UX trends are moving toward smarter, cleaner, and more user-focused design.
`,
},

{
  id: "6",
  title: "Beginner Guide to UI/UX Design",
  excerpt:
    "A complete beginner-friendly guide to understanding UI/UX design and how to start your journey.",
  image:
    "https://images.unsplash.com/photo-1558655146-d09347e92766",
  category: "UI/UX",
  date: "Apr 2, 2026",
  readTime: "6 min read",
  author: "Parth Kachare",
  featured: false,
  content: `
## Introduction

UI/UX design is one of the most in-demand skills today.

## What is UI?

UI stands for User Interface. It includes visual elements like buttons, colors, and layouts.

## What is UX?

UX stands for User Experience. It focuses on how users interact with a product.

## Tools to Learn

Figma  
Canva  
Adobe XD  

## Conclusion

UI/UX combines creativity and problem-solving to build better digital experiences.
`,
},

{
  id: "7",
  title: "Figma vs Canva: Which Tool Should You Choose?",
  excerpt:
    "Compare Figma and Canva to understand which design tool suits your needs better.",
  image:
    "https://images.unsplash.com/photo-1626785774573-4b799315345d",
  category: "Design",
  date: "Apr 3, 2026",
  readTime: "5 min read",
  author: "Parth Kachare",
  featured: false,
  content: `
## Introduction

Figma and Canva are popular design tools but serve different purposes.

## Figma

Best for UI/UX design  
Real-time collaboration  
Professional workflows  

## Canva

Easy to use  
Best for quick graphics  
Great for beginners  

## Conclusion

Choose Figma for professional design and Canva for quick, simple work.
`,
},

{
  id: "8",
  title: "How I Built My Portfolio Website Using Vite and React",
  excerpt:
    "A step-by-step breakdown of how I designed and developed my personal portfolio website.",
  image:
    "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
  category: "Web Development",
  date: "Apr 4, 2026",
  readTime: "6 min read",
  author: "Parth Kachare",
  featured: false,
  content: `
## Introduction

Building a portfolio is essential for showcasing your skills.

## Step 1: Planning

Define layout, sections, and user flow.

## Step 2: Design

Use Figma to create UI designs.

## Step 3: Development

Use React and Vite for fast performance.

## Step 4: Deployment

Deploy using Vercel.

## Conclusion

A well-designed portfolio helps you stand out.
`,
},

{
  id: "9",
  title: "Common UI Design Mistakes Beginners Should Avoid",
  excerpt:
    "Learn the most common UI design mistakes and how to avoid them to create better user experiences.",
  image:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  category: "UI/UX",
  date: "Apr 5, 2026",
  readTime: "6 min read",
  author: "Parth Kachare",
  featured: false,
  content: `
## Introduction

Many beginners make mistakes that affect usability.

## Too Many Colors

Using too many colors creates confusion.

## Poor Typography

Unreadable fonts reduce user experience.

## No Consistency

Maintain consistent design across pages.

## Not Mobile Friendly

Always design for mobile-first experience.

## Conclusion

Avoiding these mistakes improves your design quality.
`,
}

];




