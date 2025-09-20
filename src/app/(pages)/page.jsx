"use client";

import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import PostCard from "@/components/PostCard";
import Portfolio from "@/components/Portfolio";
import { useEffect, useState } from "react";
import { apiClient } from "@/lib/api";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function fetchPosts() {
      try {
        const { data } = await apiClient.get(`/api/posts?limit=10`);
        if (mounted) setPosts(data);
      } catch (error) {
        console.error("❌ Failed to load posts:", error);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchPosts();
    return () => {
      mounted = false;
    };
  }, []);

  const featuredPosts = posts.slice(0, 6);

  return (
    <main className="container mx-auto px-4 py-12 space-y-20">
      {/* Portfolio Section */}
      <Portfolio />

      {/* Featured Posts */}
      <section>
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <p className="text-gray-500 col-span-full text-center animate-pulse">
              Loading posts...
            </p>
          ) : featuredPosts.length > 0 ? (
            featuredPosts.map((post) => <PostCard key={post.slug} {...post} />)
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No posts available.
            </p>
          )}
        </div>
      </section>

      {/* Bottom Ad */}
      <section className="max-w-lg mx-auto">
        <AdSlot />
      </section>
    </main>
  );
}
