import React from "react";
import { posts } from "#site/content";
import PrintPosts from "@/components/posts/print-posts";
import { cn } from "@/lib/utils";

const RecentPosts: React.FC = () => {
  const lastFivePosts = posts.slice(-5);

  return (
    <div className={cn("pb-2")}>
      <h2 className={cn("pb-2")}>Posts récents</h2>
      <PrintPosts posts={lastFivePosts} />
    </div>
  );
};

export default RecentPosts;
