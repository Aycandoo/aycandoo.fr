import React, { type FC } from 'react';
import Teammate from './teammate';
import { StaticImage } from 'gatsby-plugin-image';

const Team: FC = () => {
  return (
    <ul className="flex flex-col gap-24 py-12 xl:flex-row">
      <Teammate
        name="Jérémy Brochard"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi."
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
