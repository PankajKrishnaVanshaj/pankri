"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

export default function PostClient({ post, latestPosts, suggestions }) {
  if (!post) {
    return <div className="p-6 text-center text-red-500">Post not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 grid lg:grid-cols-4 gap-10">
      {/* Main article */}
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

        {/* Post content */}
        <div
          className="prose prose-lg max-w-none p-6 bg-white rounded-2xl shadow-sm prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-700"
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />

        {/* AdSlot with reserved height */}
        <div className="my-16 flex justify-center">
          <div className="w-full max-w-md min-h-[250px] flex items-center justify-center">
            <AdSlot className="w-full h-full" />
          </div>
        </div>

        {/* Suggestions */}
        <section className="mt-20 pt-12 border-t border-gray-200 min-h-[300px]">
          {suggestions?.length > 0 ? (
            <>
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
            </>
          ) : (
            <p className="text-gray-400 text-center">No suggestions available.</p>
          )}
        </section>
      </article>

      {/* Sidebar */}
      <aside className="lg:col-span-1 min-h-[400px]">
        {latestPosts?.length > 0 ? (
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
        ) : (
          <div className="p-6 text-gray-400 text-center bg-white rounded-2xl shadow-md border border-gray-100 sticky top-24">
            No posts yet.
          </div>
        )}
      </aside>
    </div>
  );
}
