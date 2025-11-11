import { apiClient } from "@/lib/api";

export default async function sitemap() {
  try {
    let allPosts = [];
    let page = 1;
    const limit = 100;
    let hasMore = true;

    while (hasMore) {
      const { data: posts, meta } = await apiClient.get(`/api/posts?page=${page}&limit=${limit}`);
      if (!posts || posts.length === 0) {
        hasMore = false;
        break;
      }
      allPosts = [...allPosts, ...posts];
      hasMore = meta?.hasNextPage ?? posts.length === limit;
      page++;
    }

    const postEntries = allPosts.map((post) => ({
      url: `https://pankri.com/blog/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt).toISOString() : new Date(post.createdAt || Date.now()).toISOString(),
      changeFrequency: "weekly",  // Fixed: Use 'changeFrequency' for <changefreq> in XML
      priority: 0.8,
    }));

    // Fetch site-wide lastmod if available (e.g., from /api/site-info); fallback to now
    const siteLastMod = new Date().toISOString(); // TODO: Replace with actual fetch if you have one

    return [
      {
        url: "https://pankri.com",
        lastModified: siteLastMod,
        changeFrequency: "daily",  // Fixed key
        priority: 1.0,
      },
      {
        url: "https://pankri.com/blog",
        lastModified: siteLastMod,
        changeFrequency: "daily",
        priority: 0.9,
      },
      ...postEntries,
      // Optional: Add key subdomains for cross-discovery (submit separate sitemaps in GSC)
      // { url: "https://grapix.pankri.com", lastModified: siteLastMod, changeFrequency: "monthly", priority: 0.7 },
    ];
  } catch (error) {
    console.error("❌ Failed to generate sitemap:", error);
    // Enhanced fallback with changeFrequency
    const now = new Date().toISOString();
    return [
      { url: "https://pankri.com", lastModified: now, changeFrequency: "daily", priority: 1.0 },
      { url: "https://pankri.com/blog", lastModified: now, changeFrequency: "daily", priority: 0.9 },
    ];
  }
}