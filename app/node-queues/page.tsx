import React from "react";
import MDXRenderer from "@/lib/mdx-rendered";

const RemoteMdxPage: React.FC = () => {
  return MDXRenderer(
    "https://raw.githubusercontent.com/GeoffreyBrunet/blog-posts/main/node_queues.mdx",
  );
};

export default RemoteMdxPage;
