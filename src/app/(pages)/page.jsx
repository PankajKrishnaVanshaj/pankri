import Link from "next/link";
import PostCard from "@/components/PostCard";
import Portfolio from "@/components/Portfolio";
import { getLatestPosts } from "@/lib/api";

export const dynamic = "force-dynamic"; 

export default async function Home() {
  const featuredPosts = await getLatestPosts(6);

  return (
    <main className="container mx-auto px-4 py-12 space-y-20">
      {/* Portfolio Section */}
      <Portfolio />

      {/* Featured Posts */}
      <section aria-label="Latest Blog Posts">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Latest Posts
          </h2>
          <Link
            href="/blog"
            className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredPosts?.length > 0 ? (
            featuredPosts.map((post) => <PostCard key={post.slug} {...post} />)
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No posts available.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
