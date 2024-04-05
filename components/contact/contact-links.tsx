import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";

const ContactLinks = () => {
  return (
    <React.Fragment>
      <h2 className={cn("pb-2")}>Mes liens</h2>
      <ul className={cn("mr-2 flex list-none justify-start pb-4")}>
        <li>
          <Link
            href="https://twitter.com/geoffreybrunet5"
            target="_blank"
            className={cn(
              `${buttonVariants({ variant: "outline" })} mr-4 mt-2`,
            )}
          >
            <FaXTwitter className={cn("mr-2")} />
            Twitter / X
          </Link>
          <Link
            href="https://www.linkedin.com/in/geoffrey-brunet-558315ba/"
            target="_blank"
            className={cn(
              `${buttonVariants({ variant: "outline" })} mr-4 mt-2`,
            )}
          >
            <FaLinkedinIn className={cn("mr-2")} />
            Linkedin
          </Link>
          <Link
            href="https://github.com/GeoffreyBrunet"
            target="_blank"
            className={cn(`${buttonVariants({ variant: "outline" })} mt-2`)}
          >
            <FaGithub className={cn("mr-2")} />
            Github
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default ContactLinks;
