import React from "react";
import RecentPosts from "@/components/recent-posts";
import Projects from "@/components/projects";
import About from "@/components/about";

export default function Home() {
  return (
    <React.Fragment>
      <h1 className="pb-4">Le web et moi</h1>
      <RecentPosts />
      <Projects />
      <About />
    </React.Fragment>
  );
}
