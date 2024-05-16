import { graphql, type HeadFC, type HeadProps, type PageProps } from 'gatsby';
import React, { type FC } from 'react';
import { useQueryParams } from '../hooks/use-query-params';
import { type MarkdownRemark } from '../models/markdown-remark';
import PostCards from '../shared/post-cards';
import Layout from '../structure/layout';
import Section from '../structure/section';
import Seo from '../structure/seo';

const Blog: FC<
  PageProps<{
    allMarkdownRemark: { edges: Array<{ node: MarkdownRemark }> };
  }>
> = ({ data }) => {
  const filters = useQueryParams('filters');
  const cards = data.allMarkdownRemark.edges.map((card) => card.node);

  return (
    <Layout>
      <Section title="Le blog" id="blog" headingLevel={1}>
        <div className="px-6 lg:px-36 xl:px-60 2xl:px-[25%]">
          <p className="mb-12 mt-6 text-center">
            Petits mémos ou grands articles, nous aimons écrire sur la tech en
            général. Retrouvez ici les articles qui ont été écrits par notre
            équipe.
          </p>
          <PostCards cards={cards} filters={filters} />
        </div>
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

export default Blog;

export const Head: HeadFC = (props: HeadProps) => (
  <Seo
    title="Le blog"
    description="Petits mémos ou grands articles, nous aimons écrire sur la tech en
    général. Retrouvez ici les articles qui ont été écrits par notre
    équipe."
    pathname={props.location.pathname}
  ></Seo>
);
