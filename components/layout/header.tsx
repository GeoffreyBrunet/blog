import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="mx-auto max-w-xl px-4 pt-4 text-sm">
      <div className="flex items-center justify-between text-gray-500">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width="0"
            height="0"
            className="h-10 w-10"
            priority={false}
          />
        </Link>
        <ul className="flex list-none items-center gap-2">
          <li>
            <Link href="/blog" className="underline hover:text-black">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="underline hover:text-black">
              Me contacter
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
