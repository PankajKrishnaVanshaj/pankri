"use client";
import { apiClient } from "@/lib/api";
import { useEffect, useState } from "react";
import PostCard from "@/components/PostCard";
import Link from "next/link";

export default function NotFound() {
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
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      {/* 404 Header */}
      <div className="text-center mb-12">
        <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-600 max-w-md mx-auto">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>

      {/* Featured Posts Heading */}
      <h3 className="w-full max-w-6xl text-left text-xl md:text-2xl font-semibold text-gray-800 mb-6">
        You Might Be Interested In
      </h3>

      {/* Featured Posts */}
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
    </div>
  );
}
