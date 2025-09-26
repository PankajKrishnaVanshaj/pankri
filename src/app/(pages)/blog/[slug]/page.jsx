import PostClient from "@/components/PostClient";
import { getPost } from "@/lib/api"; 
import { generatePostMetadata, generatePostJsonLd } from "@/lib/seo"; 

// Generate metadata using the shared function
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return generatePostMetadata(post);
}

export default async function PostPage({ params }) {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    return <div className="p-6 text-center text-red-500">Post not found.</div>;
  }

  const jsonLd = generatePostJsonLd(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PostClient post={post} slug={slug} />
    </>
  );
}