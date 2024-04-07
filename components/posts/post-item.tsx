import Link from "next/link";
import { formatDate } from "@/lib/posts/tools";
import { PostItemProps } from "@/lib/interfaces/post";
import { cn } from "@/lib/utils";

export function PostItem({ slug, title, date }: PostItemProps) {
  return (
    <Link
      href={"/" + slug}
      className={cn(
        "flex items-center gap-1 text-sm text-black hover:text-gray-600 hover:underline",
      )}
    >
      <div>{formatDate(date)}</div>
      <div className={cn("h-px w-full flex-1 bg-gray-200")}></div>
      <div>{title}</div>
    </Link>
  );
}
