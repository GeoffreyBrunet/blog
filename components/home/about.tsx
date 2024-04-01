import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <React.Fragment>
      <h2 className="pb-2">Qui je suis</h2>
      <p className="pb-2 text-justify">
        Je suis un développeur full stack, pour une entreprise parisienne
        spécialisée dans la BI et l&apos;EPM. Mon rôle est de développer des
        outils (<strong>interfaces webs, APIs REST, bases de données</strong>)
        utilisés autours de notre solution logicielle, permettant la manipuation
        de bases de données multidimensionnelles dans Microsoft Excel ou Google
        Sheets. Je code en <strong>TypeScript</strong> et en{" "}
        <strong>Rust</strong>, le second étant principalement sur des projets
        personels.
      </p>
      <p className="pb-2 text-justify">
        Ce blog est fait avec&#x205F;
        <Link href="https://nextjs.org/" target="_blank">
          Next.js
        </Link>
        &#x205F;et me sert tout autant de lab, qu&apos;à partager mes
        connaissances. Il est fait sans framework, et avec des outils
        exclusivement&#x205F;
        <strong>open-source</strong>. Le code source est disponible sur Github
        dans ce&#x205F;
        <Link
          href="https://github.com/GeoffreyBrunet/geoffreybrunet.github.io"
          target="_blank"
          className="text-gray-700 underline hover:text-black"
        >
          repository
        </Link>
        .
      </p>
    </React.Fragment>
  );
};

export default About;
