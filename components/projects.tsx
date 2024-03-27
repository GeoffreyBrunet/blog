import Link from "next/link";

const projects = () => {
  return (
    <div className="pb-2">
      <h2 className="pb-2">Projects</h2>
      <ul>
        <li>
          <Link
            href="https://github.com/GeoffreyBrunet/Gradient-descent-vanilla"
            className="text-sm text-gray-500 hover:text-black"
          >
            • Benchmark sur l&apos;algorithme de descente de gradient
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/GeoffreyBrunet/MLVault"
            className="text-sm text-gray-500 hover:text-black"
          >
            • Mes notes sur le machine learning
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default projects;
