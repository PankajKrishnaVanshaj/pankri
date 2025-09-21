import PostClient from "@/components/PostClient";
import { apiClient } from "@/lib/api";

// Helper to fetch a single post by slug (server-side)
async function getPost(slug) {
  try {
    const { data } = await apiClient.get(`/api/posts?slug=${slug}`);
    return data?.[0] || null; // API returns array
  } catch (err) {
    console.error("Error fetching post:", err);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "Post Not Found | PanKri" };
  }

  const url = `https://pankri.com/blog/${post.slug}`;
  const image = post.image
    ? `https://pankri.com${post.image}`
    : "https://pankri.com/pankri-blog.webp";

  return {
    title: `${post.title} | PanKri Blog`,
    description: post.excerpt?.slice(0, 160) || "Read the latest blog post on PanKri.",
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | PanKri Blog`,
      description: post.excerpt,
      url,
      siteName: "PanKri",
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | PanKri Blog`,
      description: post.excerpt,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      maxImagePreview: "large", 
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  return <PostClient slug={slug} />;
}
