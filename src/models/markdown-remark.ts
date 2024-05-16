export interface MarkdownRemark {
  markdownRemark: any; // <-- TODO: to remove since later its a workaround
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
