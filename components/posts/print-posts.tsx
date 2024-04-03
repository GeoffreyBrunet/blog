import React from "react";
import { PostItem } from "@/components/posts/post-item";
import { PostPropsList } from "@/lib/interfaces/post";
import { cn } from "@/lib/utils";

const PrintPost = ({ posts }: PostPropsList) => {
  return (
    <React.Fragment>
      {posts?.length > 0 ? (
        <ul className={cn("flex list-none flex-col")}>
          {posts.map((post) => {
            const { slug, date, title } = post;
            return (
              <li key={slug}>
                <PostItem slug={slug} date={date} title={title} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Pas de posts...</p>
      )}
    </React.Fragment>
  );
};

export default PrintPost;
