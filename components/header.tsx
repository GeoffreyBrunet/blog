import Link from "next/link";

export const Header = () => {
  return (
    <header className="mx-auto flex max-w-xl items-center justify-between px-4 pt-4 text-sm">
      <div className="flex items-center">
        logo
        <ul className="flex">
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
