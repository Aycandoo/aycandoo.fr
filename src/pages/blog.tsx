import { type HeadProps, graphql, type HeadFC, type PageProps } from 'gatsby';
import React, { type FC } from 'react';
import PostCards from '../shared/post-cards';
import Layout from '../structure/layout';
import Section from '../structure/section';
import Seo from '../structure/seo';

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

const Index: FC<
  PageProps<{
    allMarkdownRemark: { edges: Array<{ node: MarkdownRemark }> };
  }>
> = ({ data }) => {
  const cards = data.allMarkdownRemark.edges.map((card) => card.node);

  return (
    <Layout>
      <Section title="Blog" id="blog" headingLevel={1}>
        <PostCards cards={cards} />
      </Section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            category
            date
            illustration {
              childImageSharp {
                gatsbyImageData
              }
            }
            slug
            title
          }
          excerpt
          html
        }
      }
    }
  }
`;

export default Index;

export const Head: HeadFC = (props: HeadProps) => (
  <Seo
    title="Blog"
    description="Le blog"
    pathname={props.location.pathname}
  ></Seo>
);
