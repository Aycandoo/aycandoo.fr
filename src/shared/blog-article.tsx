import { graphql } from 'gatsby';
import React, { type FC, type PropsWithChildren } from 'react';
import { type MarkdownRemark } from '../pages/blog';
import Layout from '../structure/layout';
import Section from '../structure/section';
import './blog-article.scss';

type BlogArticleParams = PropsWithChildren<{
  data: {
    markdownRemark: MarkdownRemark;
  };
}>;

const BlogArticle: FC<BlogArticleParams> = ({ data }) => {
  const post = data.markdownRemark;
  const dateTimeFormat = new Intl.DateTimeFormat('fr', { dateStyle: 'long' });
  const formattedPostDate = dateTimeFormat.format(
    new Date(post.frontmatter.date)
  );

  return (
    <Layout>
      <article className="blog-article m-auto max-w-6xl text-gray-700">
        <Section
          title=""
          id={post.frontmatter.slug}
          headingLevel={1}
          className="items-start"
        >
          <header className="mb-12 w-full border-b-2 pb-4">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
              {post.frontmatter.title}
            </h1>
            <time
              dateTime={post.frontmatter.date}
              className="text-xs uppercase text-gray-600"
            >
              {formattedPostDate}
            </time>
          </header>
          <div
            className="w-full"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Section>
      </article>
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
      }
    }
  }
`;

export default BlogArticle;
