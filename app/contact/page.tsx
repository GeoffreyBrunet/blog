import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <h1>Contact</h1>
      <ul>
        <li>
          <Link href="https://twitter.com/geoffreybrunet5">Twitter</Link>
          <Link href="https://www.linkedin.com/in/geoffrey-brunet-558315ba/">
            Linkedin
          </Link>
          <Link href="https://github.com/GeoffreyBrunet">Github</Link>
        </li>
      </ul>
      <p>Plus arrive...</p>
    </React.Fragment>
  );
};

export default Contact;
