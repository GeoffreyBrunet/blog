import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ContactLinks = () => {
  return (
    <React.Fragment>
      <h2 className="pb-2">Mes liens</h2>
      <ul className="mr-2 flex justify-start pb-2">
        <li>
          <Link
            href="https://twitter.com/geoffreybrunet5"
            target="_blank"
            className={`${buttonVariants({ variant: "outline" })} mr-4`}
          >
            <FaXTwitter className="mr-2" />
            Twitter / X
          </Link>
          <Link
            href="https://www.linkedin.com/in/geoffrey-brunet-558315ba/"
            target="_blank"
            className={`${buttonVariants({ variant: "outline" })} mr-4`}
          >
            <FaLinkedinIn className="mr-2" />
            Linkedin
          </Link>
          <Link
            href="https://github.com/GeoffreyBrunet"
            target="_blank"
            className={buttonVariants({ variant: "outline" })}
          >
            <FaGithub className="mr-2" />
            Github
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default ContactLinks;
