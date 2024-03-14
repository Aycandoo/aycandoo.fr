import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';

export type SeoParams = {
  title: string;
};

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
      <title>
        {title} | {data?.site?.siteMetadata?.title}
      </title>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </>
  );
};

export default Seo;
