import { apiClient } from "@/lib/api";

export default async function sitemap() {
  try {
    // Single fetch: Adjust limit to cover all (your backend likely supports 500+)
    const { data: posts = [], meta } = await apiClient.get(`/api/posts?limit=1000&sort=updatedAt:desc`, {
      timeout: 30000, // 30s timeout per call
    });

    if (!Array.isArray(posts)) {
      throw new Error("Invalid posts data");
    }

    const postEntries = posts
      .filter(post => post.slug) // Safety: Skip invalids
      .map((post) => ({
        url: `https://pankri.com/blog/${post.slug}`,
        lastModified: post.updatedAt 
          ? new Date(post.updatedAt).toISOString() 
          : new Date(post.createdAt || Date.now()).toISOString(),
        changeFrequency: "weekly",
        priority: 0.8,
      }))
      .slice(0, 5000); // Hard cap for huge sites; yours is fine at 82

    const now = new Date().toISOString();

    return [
      {
        url: "https://pankri.com",
        lastModified: now, // Or fetch from /api/site if available
        changeFrequency: "daily",
        priority: 1.0,
      },
      {
        url: "https://pankri.com/blog",
        lastModified: now,
        changeFrequency: "daily",
        priority: 0.9,
      },
      ...postEntries,
    ];
  } catch (error) {
    console.error("❌ Sitemap generation failed:", error);
    // Robust fallback: Hardcode essentials (add a few recent slugs manually if needed)
    const fallbackPosts = [  // From your live sitemap; rotate as needed
      { slug: "ethical-ai-marketing-for-freelancers-how-to-dodge-bias-and-privacy-pitfalls-for-premium-brand-wins-in-2025", lastModified: "2025-11-06T14:06:31Z" },
      // Add 5-10 more top slugs here for SEO safety
    ].map(p => ({
      url: `https://pankri.com/blog/${p.slug}`,
      lastModified: p.lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    }));

    return [
      { url: "https://pankri.com", lastModified: new Date().toISOString(), changeFrequency: "daily", priority: 1.0 },
      { url: "https://pankri.com/blog", lastModified: new Date().toISOString(), changeFrequency: "daily", priority: 0.9 },
      ...fallbackPosts,
    ];
  }
}