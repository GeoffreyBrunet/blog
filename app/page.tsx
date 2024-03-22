import React from "react";
import RecentPosts from "@/components/recent-posts";
import About from "@/components/about";

export default function Home() {
  return (
    <React.Fragment>
      <h1>Title</h1>
      <RecentPosts />
      <About />
    </React.Fragment>
  );
}
