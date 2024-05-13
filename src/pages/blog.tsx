import React, { type FC } from 'react';
import { type HeadFC, graphql, type PageProps } from 'gatsby';
import Layout from '../structure/layout';
import PostCards from '../shared/post-cards';
import Section from '../structure/section';
import Seo from '../structure/seo';

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

export const Head: HeadFC = () => (
  <Seo title="Blog" description="Le blog"></Seo>
);
