import { GlobeAltIcon } from '@heroicons/react/16/solid';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { StaticImage } from 'gatsby-plugin-image';
import React, { type FC, type PropsWithChildren } from 'react';

type TeammateParams = PropsWithChildren<{
  name: string;
  description: string;
  role: string;
  linkedinProfile: string;
  website?: string;
}>;

const Teammate: FC<TeammateParams> = ({
  name,
  description,
  role,
  linkedinProfile,
  website,
  children,
}) => {
  return (
    <li className="flex flex-col items-center gap-6 md:flex-row">
      <div>{children}</div>
      <div className="flex max-w-sm flex-col gap-6 xl:max-w-xl">
        <div className="flex items-center justify-between">
          <p className="text-center text-2xl font-semibold sm:text-left">
            {name}
            <span className="px-2 text-primary">|</span>
            <span className="text-xl">{role}</span>
          </p>
          <div className="flex flex-row items-center gap-2">
            {website && (
              <OutboundLink
                href={website}
                className="hover:opacity-70"
                target="_blank"
                rel="noopener"
                aria-label={`Aller sur le site personel de ${name}`}
              >
                <GlobeAltIcon className="h-7 w-7 text-[#3B68AD]" />
              </OutboundLink>
            )}
            <OutboundLink
              href={linkedinProfile}
              target="_blank"
              className="hover:opacity-70"
              rel="noopener"
            >
              <StaticImage
                height={25}
                src="../../images/linkedin-logo.png"
                alt={`Aller sur le profil linkedin de ${name}`}
              />
            </OutboundLink>
          </div>
        </div>
        <p className="text-justify">{description}</p>
      </div>
    </li>
  );
};

export default Teammate;
