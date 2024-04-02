import React from "react";
import PrintPosts from "@/components/posts/print-posts";
import { posts } from "#site/content";
import { sortPosts } from "@/lib/posts/tools";

export default async function BlogPage() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  return (
    <React.Fragment>
      <h1 className="pb-4">Blog</h1>
      <PrintPosts posts={sortedPosts} />
    </React.Fragment>
  );
}
