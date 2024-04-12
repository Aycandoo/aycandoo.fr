import React, { type FC } from 'react';
import Teammate from './teammate';
import { StaticImage } from 'gatsby-plugin-image';

const Team: FC = () => {
  return (
    <ul className="flex flex-row flex-wrap items-center justify-center gap-16 py-12 ">
      <Teammate
        name="Jérémy Brochard"
        description="Développeur full stack polyvalent depuis 2015, il a accumulé une riche expérience en travaillant chez des clients renommés tels que la Société Générale et LexisNexis. Son expertise réside principalement dans le développement frontend, particulièrement sur Angular. Certifié Opquast, il accorde une attention particulière à l'accessibilité pour garantir des solutions inclusives. En dehors de son travail, il nourrit une passion pour le gaming, qui stimule sa créativité et sa curiosité technologique."
        role="Président"
        linkedinProfile="https://www.linkedin.com/in/jeremy-brochard"
      >
        <StaticImage
          className="rounded-3xl"
          src="../images/team/jeremy.jpg"
          height={250}
          width={250}
          alt=""
        />
      </Teammate>
      <Teammate
        name="Céline Ung"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi."
        role="Associée"
        linkedinProfile="https://www.linkedin.com/in/celine-ung"
      >
        <StaticImage
          className="rounded-3xl"
          src="../images/team/celine.png"
          height={250}
          width={250}
          alt=""
        />
      </Teammate>
    </ul>
  );
};

export default Team;
