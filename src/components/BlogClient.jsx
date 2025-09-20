"use client";

import { useEffect, useState } from "react";
import AdSlot from "@/components/AdSlot";
import PostCard from "@/components/PostCard";
import { apiClient } from "@/lib/api";

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "PanKri Blog",
  url: "https://pankri.com/blog",
  description:
    "The PanKri Blog features tutorials, insights, and creativity on Next.js, React, Tailwind CSS, and web development.",
  publisher: {
    "@type": "Organization",
    name: "PanKri",
    url: "https://pankri.com",
    logo: {
      "@type": "ImageObject",
      url: "https://pankri.com/pankri.webp",
    },
  },
};




export default function BlogClient() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function fetchPosts() {
      try {
        const { data } = await apiClient.get(`/api/posts?limit=100`);
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

  return (
    <main className="container mx-auto px-4 py-16">
      {/* ✅ Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      {/* Page Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Blog Posts
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Explore the latest articles on tech, coding, and creativity. Stay
          inspired with new insights every week.
        </p>
      </header>

      {/* Posts Grid */}
      <section>
        <h2 className="sr-only">All Posts</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {loading ? (
            <p className="text-gray-500 col-span-full text-center animate-pulse">
              Loading posts...
            </p>
          ) : posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.slug} {...post} />)
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No posts available.
            </p>
          )}
        </div>
      </section>

      {/* Ad Slot */}
      <section className="max-w-md mx-auto mt-16">
        <AdSlot />
      </section>
    </main>
  );
}
