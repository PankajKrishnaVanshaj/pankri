import React from "react";
import Link from "next/link";

const PostCard = ({ slug, title, excerpt }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-gray-100">
      {/* Title */}
      <Link href={`/blog/${slug}`}>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
      </Link>

      {/* Excerpt */}
      <p className="text-gray-600 text-sm md:text-base mb-6 line-clamp-3 leading-snug">
        {excerpt}
      </p>

      {/* Read More */}
      <Link
        href={`/blog/${slug}`}
        className="mt-auto inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-blue-600 border border-blue-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition"
      >
        Read More
        <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );
};

export default PostCard;
