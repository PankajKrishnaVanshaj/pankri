import axios from "axios";

function getBaseUrl() {
  if (typeof window !== "undefined") {
    // Client-side → relative URL works
    return "";
  }
  // Server-side → must use absolute URL
  return process.env.NEXT_PUBLIC_BASE_URL;
}

export async function getPosts() {
  try {
    const baseUrl = getBaseUrl();
    const { data } = await axios.get(`${baseUrl}/api/posts`);
    return data.map((post) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt || "",
      content: post.content || "",
    }));
  } catch (error) {
    console.error("❌ Error fetching posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug) {
  try {
    const baseUrl = getBaseUrl();
    const { data } = await axios.get(`${baseUrl}/api/posts/${slug}`);

    if (!data) return null;

    return {
      slug: data.slug,
      title: data.title,
      excerpt: data.excerpt || "",
      content: data.content || "",
      image: data.image || null,
      createdAt: data.createdAt || null,
      updatedAt: data.updatedAt || null,
    };
  } catch (error) {
    console.error(`❌ Error fetching post with slug "${slug}":`, error);
    return null;
  }
}
