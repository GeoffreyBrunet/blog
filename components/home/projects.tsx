import Link from "next/link";
import { cn } from "@/lib/utils";

const projects: React.FC = () => {
  return (
    <div className={cn("pb-2")}>
      <h2 className={cn("pb-2")}>Projects</h2>
      <ul className={cn("list-disc pl-4 text-sm text-black")}>
        <li>
          <Link
            href="https://github.com/GeoffreyBrunet/Gradient-descent-vanilla"
            target="_blank"
            className={cn("hover:text-gray-600 hover:underline")}
          >
            Benchmark sur l&apos;algorithme de descente de gradient
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/GeoffreyBrunet/MLVault"
            target="_blank"
            className={cn("hover:text-gray-600 hover:underline")}
          >
            Mes notes sur le machine learning
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/GeoffreyBrunet/redis-over-http-async"
            target="_blank"
            className={cn("hover:text-gray-600 hover:underline")}
          >
            Un microservice pour utiliser Redis avec HTTP (fait en Rust)
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default projects;
