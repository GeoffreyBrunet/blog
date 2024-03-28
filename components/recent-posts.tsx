import Link from "next/link";

const RecentPosts = () => {
  return (
    <div className="pb-2">
      <h2 className="pb-2">Posts récents</h2>
      <ul className="text-sm text-gray-700">
        <li>
          <Link
            href="/node-queues"
            className="hover:text-black hover:underline"
          >
            La gestion des files d&apos;attente avec Node.js
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default RecentPosts;
