import React from "react";
import { posts } from "@/lib/posts/posts";
import PrintPosts from "@/lib/posts/print-posts";

const AllPosts: React.FC = () => {
  return <PrintPosts posts={posts} />;
};

export default AllPosts;
