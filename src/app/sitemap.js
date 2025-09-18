import { getPosts } from "@/lib/posts";

export default async function sitemap() {
  const posts = await getPosts();

  // Map blog posts into sitemap entries
  const postEntries = posts.map((post) => ({
    url: `https://pankri.com/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
    changefreq: "daily",   // posts updated/added daily
    priority: 0.8,         // good importance for posts
  }));

  return [
    {
      url: "https://pankri.com",
      lastModified: new Date(),
      changefreq: "daily",
      priority: 1.0, // homepage = highest importance
    },
    {
      url: "https://pankri.com/blog",
      lastModified: new Date(),
      changefreq: "daily",
      priority: 0.9, // blog index very important
    },
    ...postEntries,
  ];
}
