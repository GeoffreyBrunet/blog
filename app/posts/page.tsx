import React from "react";
import AllPosts from "@/components/posts/all-posts";

const Posts: React.FC = () => {
  return (
    <React.Fragment>
      <h1 className="pb-4">Articles</h1>
      <AllPosts />
    </React.Fragment>
  );
};

export default Posts;
