import React, { type FC } from 'react';
import Teammate from './teammate';
import { StaticImage } from 'gatsby-plugin-image';

const Team: FC = () => {
  return (
    <ul className="flex flex-row flex-wrap items-center justify-center gap-16 py-12 ">
      <Teammate
        name="Jérémy Brochard"
        description="Développeur full stack polyvalent depuis 2015, il a accumulé une riche expérience en travaillant chez des clients renommés tels que la Société Générale et LexisNexis. Son expertise réside principalement dans le développement frontend, particulièrement sur Angular. Certifié Opquast, il accorde une attention particulière à l'accessibilité pour garantir des solutions inclusives. En dehors de son travail, il nourrit une passion pour le gaming, qui stimule sa créativité et sa curiosité technologique."
        role="CEO"
        linkedinProfile="https://www.linkedin.com/in/jeremy-brochard"
        website="https://jeremybrochard.dev/"
      >
        <StaticImage
          className="rounded-3xl"
          src="../../images/team/jeremy.jpg"
          height={250}
          width={250}
          alt=""
        />
      </Teammate>
      <Teammate
        name="Céline Ung"
        description="Développeuse full stack depuis 2015 et spécialisée dans les technologies JavaScript, elle a travaillé chez des clients renommés tels que BNP Paribas, JC Decaux, Pix et Invivo en apportant son expertise à leurs projets web. Elle veille à la mise en place solutions durables et accessibles à tous et sait également favoriser une atmosphère de travail dynamique, encourageant des pratiques collaboratives fructueuses au sein de l'équipe."
        role="Associée"
        linkedinProfile="https://www.linkedin.com/in/celine-ung"
        website="https://celineung.com/"
      >
        <StaticImage
          className="rounded-3xl"
          src="../../images/team/celine.png"
          height={250}
          width={250}
          alt=""
        />
      </Teammate>
    </ul>
  );
};

export default Team;
