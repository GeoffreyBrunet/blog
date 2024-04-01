import React from "react";
import { posts } from "@/lib/posts";
import PrintPosts from "./print-posts";

const AllPosts: React.FC = () => {
  return <PrintPosts posts={posts} />;
};

export default AllPosts;
