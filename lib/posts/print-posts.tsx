import Link from "next/link";
import { Post } from "@/lib/interfaces/post";

interface PostsProps {
  posts: Post[];
}

const PrintPosts = ({ posts }: PostsProps) => {
  return (
    <ul className="text-sm text-gray-700">
      {posts.map((post, index) => (
        <li key={index}>
          <Link href={post.url} className="hover:text-black hover:underline">
            {post.date} - {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PrintPosts;
