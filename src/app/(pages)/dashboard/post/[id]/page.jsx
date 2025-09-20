"use client";

import { useState, useEffect, use } from "react";
import dynamic from "next/dynamic";
import { apiClient } from "@/lib/api";

const Editor = dynamic(() => import("../../_components/Editor"), { ssr: false });

const UpdatePost = ({ params }) => {
  const { id } = use(params); 

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  // Fetch post data on mount
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const { data } = await apiClient.get(`/api/posts/${id}`);
        setTitle(data.title);
        setSlug(data.slug);
        setExcerpt(data.excerpt);
        setContent(data.content);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPost();
  }, [id]);

  // Auto-generate slug when title changes (only if slug is empty)
  useEffect(() => {
    if (title && !slug) {
      const generatedSlug = title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
      setSlug(generatedSlug);
    }
  }, [title]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!title || !slug || !excerpt || !content) {
      alert("Please fill in all fields");
      return;
    }

    try {
      setSaving(true);
      await apiClient.put(`/api/posts/${id}`, { title, slug, excerpt, content });
      alert("✅ Post updated successfully!");
    } catch (error) {
      console.error("Error updating post:", error);
      alert("❌ Failed to update post");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-600">
        Loading post...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          ✏️ Update Post
        </h1>

        <form onSubmit={handleUpdate} className="space-y-8">
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
              placeholder="Edit post title"
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
              placeholder="my-updated-post"
            />
            <p className="text-xs text-gray-500 mt-1">
              Post URL: <span className="font-mono text-blue-600">{slug || "..."}</span>
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
              placeholder="Edit summary..."
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
              disabled={saving}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-xl font-medium shadow-md hover:bg-orange-700 transition disabled:opacity-50"
            >
              {saving ? "Updating..." : "💾 Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
