import BlogCard from "@/components/BlogCard";
import { BlogPosts } from "@/components/TechReview";
import React from "react";

const TechReviews = () => {
  return (
    <div className="p-6 rounded-lg shadow-lg bg-white">
      <div id="Blogs">
        
        <div className="space-y-10 md:space-y-0 md:space-x-5">
          <BlogCard blogPosts={BlogPosts} />
        </div>
      </div>
    </div>
  );
};

export default TechReviews;
