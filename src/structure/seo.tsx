import React, { type FC, type PropsWithChildren } from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

export type SeoParams = PropsWithChildren<{
  title: string;
  pathname: string;
  description: string;
}>;

const Seo: FC<SeoParams> = ({ title, pathname, description, children }) => {
  const { title: defaultTitle, author, image, siteUrl } = useSiteMetadata();

  const seo = {
    title: `${title} | ${defaultTitle}`,
    description,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    author,
  };
  return (
    <>
      <html lang="fr" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:image" content={seo.image} />
      {children}
      <link rel="preconnect" href="https://rsms.me/" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </>
  );
};

export default Seo;
