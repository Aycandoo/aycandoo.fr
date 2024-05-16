import { StaticImage } from 'gatsby-plugin-image';
import React, { type FC, type PropsWithChildren } from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

type TeammateParams = PropsWithChildren<{
  name: string;
  description: string;
  role: string;
  linkedinProfile: string;
}>;

const Teammate: FC<TeammateParams> = ({
  name,
  description,
  role,
  linkedinProfile,
  children,
}) => {
  return (
    <li className="flex flex-col items-center gap-6 md:flex-row">
      <div>{children}</div>
      <div className="flex max-w-sm flex-col gap-6 xl:max-w-xl">
        <div className="flex items-center justify-between">
          <p className="text-center text-2xl font-semibold sm:text-left">
            {name}
            <span className="px-2 text-[#ffdd57]">|</span>
            <span className="text-xl">{role}</span>
          </p>
          <OutboundLink href={linkedinProfile}>
            <StaticImage
              height={25}
              src="../../images/linkedin-logo.png"
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
