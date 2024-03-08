import React from 'react';
import Teammate from './teammate';
import { StaticImage } from 'gatsby-plugin-image';

const Team = () => {
  return (
    <ul className="flex gap-24 py-12">
      <Teammate
        name="Jérémy Brochard"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi."
      >
        <StaticImage src="../images/team/jeremy.jpg" height={150} alt="" />
      </Teammate>
      <Teammate
        name="Céline Ung"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi."
      >
        <StaticImage src="../images/team/jeremy.jpg" height={150} alt="" />
      </Teammate>
    </ul>
  );
};

export default Team;
