"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../_components/Editor"), { ssr: false });

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  // Auto-generate slug from title
  useEffect(() => {
    if (title) {
      const generatedSlug = title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "") // remove special chars
        .replace(/\s+/g, "-"); // spaces -> dashes
      setSlug(generatedSlug);
    }
  }, [title]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !slug || !excerpt || !content) {
      alert("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      await axios.post("/api/posts", { title, slug, excerpt, content });
      setTitle("");
      setSlug("");
      setExcerpt("");
      setContent("");
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          ✍️ Create a New Post
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Post Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter an engaging post title"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Slug (URL)
            </label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="my-first-post"
            />
            <p className="text-xs text-gray-500 mt-1">
              This will be the URL for your post: <br />
              <span className="font-mono text-blue-600">{slug || "..."}</span>
            </p>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Excerpt / Summary
            </label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
              className="w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Write a short summary to hook your readers..."
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Post Content
            </label>
            <Editor value={content} onChange={setContent} />
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium shadow-md hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Publishing..." : "🚀 Publish Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
