import React from "react";
import RecentPosts from "@/components/recent-posts";
import Projects from "@/components/projects";
import About from "@/components/about";
import Resumes from "@/components/resumes";

export default function Home() {
  return (
    <React.Fragment>
      <h1 className="pb-4">Welcome home</h1>
      <RecentPosts />
      <Projects />
      <About />
      <Resumes />
    </React.Fragment>
  );
}
