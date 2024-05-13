import React, { type FC, type PropsWithChildren } from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
// eslint-disable-next-line import/no-duplicates
import Layout from '../structure/layout';
import { graphql } from 'gatsby';

type TeammateParams = PropsWithChildren<{
  data: any;
}>;

const BlogArticle: FC<TeammateParams> = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const data = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        date
        slug
        title
        illustration {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    }
  }
`;

export default BlogArticle;
