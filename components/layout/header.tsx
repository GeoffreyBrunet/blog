import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  return (
    <header className={cn("mx-auto max-w-xl px-4 pt-4 text-sm")}>
      <div className={cn("flex items-center justify-between text-gray-500")}>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width="0"
            height="0"
            className={cn("h-10 w-10")}
            priority={false}
          />
        </Link>
        <ul className={cn("flex list-none items-center gap-2")}>
          <li>
            <Link href="/blog" className={cn("underline hover:text-black")}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className={cn("underline hover:text-black")}>
              Me contacter
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
