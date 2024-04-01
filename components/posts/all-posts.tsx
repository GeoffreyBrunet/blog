import React from "react";
import { posts } from "@/lib/posts";
import PrintPosts from "@/lib/print-posts";

const AllPosts: React.FC = () => {
  return <PrintPosts posts={posts} />;
};

export default AllPosts;
