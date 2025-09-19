import axios from "axios";

async function getPosts() {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`
    );

    return data.map((post) => ({
      slug: post.slug,
      updatedAt: post.updatedAt,
    }));
  } catch (error) {
    console.error("❌ Error fetching posts:", error);
    return [];
  }
}

export default async function sitemap() {
  const posts = await getPosts();

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
}
