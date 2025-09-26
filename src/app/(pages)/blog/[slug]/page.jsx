import PostClient from "@/components/PostClient";
import { getPost, getLatestPosts } from "@/lib/api";
import { generatePostMetadata, generatePostJsonLd } from "@/lib/seo";

// Metadata generation
export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ await params
  const post = await getPost(slug);
  return generatePostMetadata(post);
}

export default async function PostPage({ params }) {
  const { slug } = await params; // ✅ await params

  const post = await getPost(slug);

  const posts = await getLatestPosts(9); // fetch 9 posts
  const latestPosts = posts.filter((p) => p.slug !== slug).slice(0, 5);
  const suggestions = posts.filter((p) => p.slug !== slug).slice(5, 9);

  if (!post) {
    return (
      <div className="p-6 text-center text-red-500">
        Post not found.
      </div>
    );
  }

  const jsonLd = generatePostJsonLd(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PostClient
        post={post}
        latestPosts={latestPosts}
        suggestions={suggestions}
      />
    </>
  );
}
