"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { apiClient } from "@/lib/api";

const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

// Fetch latest posts (excluding current)
async function getLatestPosts(excludeSlug, limit = 5) {
  try {
    const { data } = await apiClient.get(`/api/posts?limit=${limit + 5}`);
    const posts = data.filter((p) => p.slug !== excludeSlug);
    return {
      latestPosts: posts.slice(0, limit),
      suggestions: posts.slice(limit, limit + 4),
    };
  } catch (err) {
    console.error("Error fetching latest posts:", err);
    return { latestPosts: [], suggestions: [] };
  }
}

export default function PostClient({ post, slug }) {
  const [latestPosts, setLatestPosts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestPosts() {
      const { latestPosts, suggestions } = await getLatestPosts(slug);
      setLatestPosts(latestPosts);
      setSuggestions(suggestions);
      setLoading(false);
    }

    fetchLatestPosts();
  }, [slug]);

  if (loading) {
    return (
      <p className="text-center py-20 text-gray-500 animate-pulse">
        Loading post...
      </p>
    );
  }

  if (!post) {
    return <div className="p-6 text-center text-red-500">Post not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 grid lg:grid-cols-4 gap-10">
      <article className="lg:col-span-3 max-w-3xl">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4 bg-white p-4 sm:p-6 rounded-2xl shadow-sm">
            {post.title}
          </h1>
          {post.updatedAt && (
            <p className="text-sm text-gray-500 pl-2">
              {new Date(post.updatedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
        </header>

        <div
          className="prose prose-lg max-w-none p-6 bg-white rounded-2xl shadow-sm prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-700"
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />

        <div className="my-16 flex justify-center">
          <AdSlot className="w-full max-w-md" />
        </div>

        {suggestions.length > 0 && (
          <section className="mt-20 pt-12 border-t border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                You may also like
              </h2>
              <Link
                href="/blog"
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                View All →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {suggestions.map((s) => (
                <Link
                  key={s.slug}
                  href={`/blog/${s.slug}`}
                  className="block p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-blue-400 transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3 mt-3">
                    {s.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      {latestPosts.length > 0 && (
        <aside className="lg:col-span-1">
          <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 sticky top-24">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Latest Posts
            </h2>
            <ul className="space-y-4">
              {latestPosts.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="flex items-start space-x-3 group"
                  >
                    <div className="flex-1">
                      <p className="text-gray-700 font-medium group-hover:text-blue-600 transition line-clamp-2">
                        {p.title}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}
    </div>
  );
}