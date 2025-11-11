import PostClient from "@/components/PostClient";
import { getPost, getLatestPosts } from "@/lib/api";
import { generatePostMetadata, generatePostJsonLd } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let post;
  try {
    post = await getPost(slug);
  } catch (error) {
    console.error(`Metadata fetch error for slug ${slug}:`, error); // Log for debugging
  }

  if (!post) {
    return {
      title: "Post Not Found | PanKri",
      robots: { index: false, follow: false },
    };
  }

  return generatePostMetadata(post);
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  let post;
  try {
    post = await getPost(slug);
  } catch (error) {
    console.error(`Page fetch error for slug ${slug}:`, error);
    // Render 404 with metadata already handling noindex
    return (
      <div className="p-6 text-center text-red-500">
        <h1>Post Not Found</h1>
        <p>Sorry, the requested post doesn't exist.</p>
        <a href="/blog" className="text-blue-500">Back to Blog</a>
      </div>
    );
  }

  if (!post) {
    // Same as above
    return <div>...</div>; // Omitted for brevity
  }

  const posts = await getLatestPosts(9);
  const latestPosts = posts.filter((p) => p.slug !== slug).slice(0, 5);
  const suggestions = posts.filter((p) => p.slug !== slug).slice(5, 9);

  const jsonLd = generatePostJsonLd(post);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
          key="json-ld"
          suppressHydrationWarning // Add for client-side hydration if needed
        />
      )}
      <PostClient post={post} latestPosts={latestPosts} suggestions={suggestions} />
    </>
  );
}