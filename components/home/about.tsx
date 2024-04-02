import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <React.Fragment>
      <h2 className="pb-2">Qui je suis</h2>
      <p className="pb-2 text-justify">
        Je suis software engineer, pour une entreprise parisienne spécialisée
        dans la BI et l&apos;EPM. Mon rôle est de développer des outils (
        <strong>interfaces webs, APIs REST, bases de données</strong>) utilisés
        autours de notre solution logicielle, permettant la manipuation de bases
        de données multidimensionnelles dans Microsoft Excel ou Google Sheets.
        Je code principalement en <strong>Python</strong> et en
        <strong>TypeScript</strong>.
      </p>
      <p className="pb-2 text-justify">
        Passioné de sciences et de programmation, j&apos;aime partager mes
        connaissances et mes expériences. Ce blog est un moyen pour moi de
        partager mes expériences, mes découvertes et mes réflexions. Mes sujets
        de prédilection sont <strong>l&apos;intelligence artificielle</strong>{" "}
        et
        <strong>l&apos;ingénierie logicielle</strong>.
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
      <p className="pb-2 text-justify">
        <i>
          &quot;Essayer d&apos;être heureux, c&apos;est essayer de construire
          une machine sans autre spécification que celle de fonctionner sans
          bruit.&quot;
        </i>{" "}
        Robert Oppenheimer (1904-1967)
      </p>
    </React.Fragment>
  );
};

export default About;
