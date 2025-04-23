import { BlogPosts } from "@/components/TechReview";

export default function sitemap() {
  const baseUrl = "https://pankri.com";

  // Ensure BlogPosts is an array and has slug properties
  const posts = Array.isArray(BlogPosts) ? BlogPosts : [];

  return posts.map(post => ({
    url: `${baseUrl}${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.7,
  }));
}