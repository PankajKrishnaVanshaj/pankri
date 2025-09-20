import { apiClient } from "@/lib/api";



export default async function sitemap() {
  try {
    const { data: posts } = await apiClient.get(`/api/posts?limit=100`);

    const postEntries = posts.map((post) => ({
      url: `https://pankri.com/blog/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
      changefreq: "daily",
      priority: 0.8,
    }));

    return [
      {
        url: "https://pankri.com",
        lastModified: new Date(),
        changefreq: "daily",
        priority: 1.0,
      },
      {
        url: "https://pankri.com/blog",
        lastModified: new Date(),
        changefreq: "daily",
        priority: 0.9,
      },
      ...postEntries,
    ];
  } catch (error) {
    console.error("❌ Failed to generate sitemap:", error);
    return [
      {
        url: "https://pankri.com",
        lastModified: new Date(),
        changefreq: "daily",
        priority: 1.0,
      },
      {
        url: "https://pankri.com/blog",
        lastModified: new Date(),
        changefreq: "daily",
        priority: 0.9,
      },
    ];
  }
}
