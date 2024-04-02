import Link from "next/link";
import { formatDate } from "@/lib/posts/tools";
import { PostItemProps } from "@/lib/interfaces/post";

export function PostItem({ slug, title, date }: PostItemProps) {
  return (
    <Link
      href={"/" + slug}
      className="flex items-center gap-1 pt-4 text-sm text-black hover:text-gray-600 hover:underline"
    >
      <div>{formatDate(date)}</div>
      <div className="h-px w-full flex-1 bg-gray-200"></div>
      <div>{title}</div>
    </Link>
  );
}
