import { StaticImage } from 'gatsby-plugin-image';
import React, { type FC, type PropsWithChildren } from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

type TeammateParams = PropsWithChildren<{
  name: string;
  description: string;
  linkedinProfile: string;
}>;

const Teammate: FC<TeammateParams> = ({
  name,
  description,
  linkedinProfile,
  children,
}) => {
  return (
    <li className="flex flex-col items-center gap-6 sm:flex-row">
      <div className="grayscale hover:grayscale-0">{children}</div>
      <div className="flex max-w-sm flex-col gap-6">
        <div className="flex items-center justify-between">
          <p className="text-center text-2xl font-semibold sm:text-left">
            {name}
          </p>
          <OutboundLink href={linkedinProfile}>
            <StaticImage
              height={25}
              src="../images/linkedin-logo.png"
              alt="linkedin-link"
            />
          </OutboundLink>
        </div>
        <p className="text-justify">{description}</p>
      </div>
    </li>
  );
};

export default Teammate;
