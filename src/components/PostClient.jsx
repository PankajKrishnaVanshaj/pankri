"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";

function PostClient({ post, latestPosts, suggestions }) {
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef();

  // Lazy load post content
  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowContent(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  if (!post) {
    return (
      <div className="p-6 text-center text-red-500 min-h-[200px]">
        Post not found.
      </div>
    );
  }

  // Memoize lazy-loaded post content with lazy-loading images
  const lazyContent = useMemo(() => {
    if (!showContent || !post.content) return null;
    // Add loading="lazy" to all images
    const contentWithLazyImages = post.content.replace(
      /<img /g,
      '<img loading="lazy" '
    );
    return <div dangerouslySetInnerHTML={{ __html: contentWithLazyImages }} />;
  }, [showContent, post.content]);

  // Memoize latest posts sidebar
  const memoLatestPosts = useMemo(() => {
    if (!latestPosts?.length) return null;
    return latestPosts.map((p) => (
      <li key={p.slug}>
        <Link href={`/blog/${p.slug}`} className="flex items-start space-x-3 group">
          <div className="flex-1">
            <p className="text-gray-700 font-medium group-hover:text-blue-600 transition line-clamp-2 min-h-[40px]">
              {p.title}
            </p>
          </div>
        </Link>
      </li>
    ));
  }, [latestPosts]);

  // Memoize suggestions
  const memoSuggestions = useMemo(() => {
    if (!suggestions?.length) return null;
    return suggestions.map((s) => (
      <Link
        key={s.slug}
        href={`/blog/${s.slug}`}
        className="block p-4 sm:p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-blue-400 transition-all group min-h-[140px]"
      >
        <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition">
          {s.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-3 mt-2 sm:mt-3">{s.excerpt}</p>
      </Link>
    ));
  }, [suggestions]);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 grid lg:grid-cols-4 gap-8 lg:gap-10">
      {/* Main Article */}
      <article className="lg:col-span-3 max-w-3xl">
        <header className="mb-6 md:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4 bg-white p-4 sm:p-6 rounded-2xl shadow-sm min-h-[120px]">
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

        {/* Post Content */}
        <div
          ref={contentRef}
          className="prose prose-lg max-w-none p-4 sm:p-6 bg-white rounded-2xl shadow-sm prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-700 min-h-[400px] md:min-h-[500px]"
        >
          {lazyContent || (
            <div className="text-center text-gray-400 animate-pulse">
              Loading content...
            </div>
          )}
        </div>

        {/* Suggestions */}
        <section className="mt-12 md:mt-20 pt-8 border-t border-gray-200 min-h-[300px]">
          {suggestions?.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-6 md:mb-8">
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
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">{memoSuggestions}</div>
            </>
          ) : (
            <p className="text-gray-400 text-center min-h-[140px]">
              No suggestions available.
            </p>
          )}
        </section>
      </article>

      {/* Sidebar */}
      <aside className="lg:col-span-1">
        {latestPosts?.length > 0 ? (
          <div className="p-4 sm:p-6 bg-white rounded-2xl shadow-md border border-gray-100 sticky top-20 md:top-24 min-h-[400px]">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6">
              Latest Posts
            </h2>
            <ul className="space-y-3 md:space-y-4">{memoLatestPosts}</ul>
          </div>
        ) : (
          <div className="p-4 sm:p-6 text-gray-400 text-center bg-white rounded-2xl shadow-md border border-gray-100 sticky top-20 md:top-24 min-h-[400px]">
            No posts yet.
          </div>
        )}
      </aside>
    </div>
  );
}

export default React.memo(PostClient);
