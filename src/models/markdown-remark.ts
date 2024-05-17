export interface MarkdownRemark {
  id: string;
  html: string;
  frontmatter: {
    category: string;
    date: string;
    slug: string;
    title: string;
    illustration: {
      childImageSharp: {
        gatsbyImageData: any;
      };
    };
  };
  excerpt: string;
}
