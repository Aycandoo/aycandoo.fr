import { graphql, useStaticQuery } from 'gatsby';

export interface SiteMetadata {
  title: string;
  author: string;
  image: string;
  siteUrl: string;
}

export const useSiteMetadata = (): SiteMetadata => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          image
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
