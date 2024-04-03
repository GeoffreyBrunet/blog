import React from "react";
import RecentPosts from "@/components/home/recent-posts";
import Projects from "@/components/home/projects";
import About from "@/components/home/about";
import Resumes from "@/components/home/resumes";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <React.Fragment>
      <h1 className={cn("pb-4")}>Home</h1>
      <RecentPosts />
      <Projects />
      <About />
      <Resumes />
    </React.Fragment>
  );
}
