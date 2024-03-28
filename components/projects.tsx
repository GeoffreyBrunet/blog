import Link from "next/link";

const projects = () => {
  return (
    <div className="pb-2">
      <h2 className="pb-2">Projects</h2>
      <ul className="text-sm text-gray-700">
        <li>
          <Link
            href="https://github.com/GeoffreyBrunet/Gradient-descent-vanilla"
            target="_blank"
            className="hover:text-black hover:underline"
          >
            • Benchmark sur l&apos;algorithme de descente de gradient
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/GeoffreyBrunet/MLVault"
            target="_blank"
            className="hover:text-black hover:underline"
          >
            • Mes notes sur le machine learning
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/GeoffreyBrunet/redis-over-http-async"
            target="_blank"
            className="hover:text-black hover:underline"
          >
            • Un microservice pour utiliser Redis avec HTTP (fait en Rust)
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default projects;
