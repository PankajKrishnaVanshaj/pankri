import axios from "axios";


export async function getPosts() {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
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
