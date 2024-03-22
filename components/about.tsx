import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <React.Fragment>
      <h2>À propos</h2>
      <p>
        Je suis un développeur full stack, pour une entreprise parisienne
        spécialisée dans la BI et l&apos;EPM. Mon rôle est de développer des
        outils (<strong>interfaces webs, APIs REST, bases de données</strong>)
        utilisés autours de notre solution logicielle, permettant la manipuation
        de bases de données multidimensionnelles dans Microsoft Excel ou Google
        Sheets. Je code en <strong>TypeScript</strong> et en{" "}
        <strong>Rust</strong>, le second étant principalement sur des projets
        personels.
      </p>
      <p>
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
        >
          repository
        </Link>
        .
      </p>
    </React.Fragment>
  );
};

export default About;
