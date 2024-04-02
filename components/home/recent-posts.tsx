import React from "react";
import { posts } from "#site/content";
import PrintPosts from "@/components/posts/print-posts";

const RecentPosts: React.FC = () => {
  const lastFivePosts = posts.slice(-5);

  return (
    <div className="pb-2">
      <h2 className="pb-2">Posts récents</h2>
      <PrintPosts posts={lastFivePosts} />
    </div>
  );
};

export default RecentPosts;
