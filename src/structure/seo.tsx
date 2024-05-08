import { graphql, useStaticQuery } from 'gatsby';
import React, { type FC } from 'react';

export interface SeoParams {
  title: string;
}

const Seo: FC<SeoParams> = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <html lang="fr" />
      <title>
        {title} | {data?.site?.siteMetadata?.title}
      </title>
      <link rel="preconnect" href="https://rsms.me/" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </>
  );
};

export default Seo;
