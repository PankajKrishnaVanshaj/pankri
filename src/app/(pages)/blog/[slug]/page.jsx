import PostClient from "@/components/PostClient";
import { getPostBySlug } from "@/lib/posts";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: "Post Not Found | PanKri" };

  const url = `https://pankri.com/blog/${post.slug}`;
  const image = post.image
    ? `https://pankri.com${post.image}`
    : "https://pankri.com/pankri-blog.png";

  return {
    title: `${post.title} | PanKri Blog`,
    description: post.excerpt?.slice(0, 160) || "Read the latest blog post on PanKri.",
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
    alternates: { canonical: url },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  return <PostClient slug={slug} />;
}
