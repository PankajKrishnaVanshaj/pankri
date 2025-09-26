import BlogClient from "@/components/BlogClient";

// ✅ Page-level SEO Metadata (can stay server-side in layout or head.tsx)
export const metadata = {
  title: "Blog - PanKri | Tech, Coding & Creativity Articles",
  description:
    "Explore the latest blog posts on PanKri. Discover insights, tutorials, and stories about Next.js, React, Tailwind CSS, and modern web development.",
  keywords: [
    "PanKri Blog",
    "Coding Tutorials",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Web Development",
    "Tech Articles",
    "Programming Insights",
  ],
};

export default function Blog() {
  return <BlogClient />;
}
