import React, { type FC } from 'react';
import { graphql, type PageProps } from 'gatsby';
import Layout from '../../structure/layout';
import PostCards from './post-cards';

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
        fluid: {
          base64: string;
        };
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
  console.log(data);
  const cards = data.allMarkdownRemark.edges.map((card) => card.node);

  return (
    <Layout>
      <PostCards cards={cards} />
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
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
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
