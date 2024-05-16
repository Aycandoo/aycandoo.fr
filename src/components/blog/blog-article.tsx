import { type HeadFC, type HeadProps, graphql, navigate } from 'gatsby';
import React, { type FC } from 'react';
import Layout from '../structure/layout';
import Section from '../structure/section';
import Seo from '../structure/seo';
import './blog-article.scss';
import { type MarkdownRemark } from '../../models/markdown-remark';

export interface BlogArticleParams {
  data: {
    markdownRemark: MarkdownRemark;
  };
}

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
          <header className="mb-12 w-full ">
            <div className="border-b-2 pb-4">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
                {post.frontmatter.title}
              </h1>
              <time
                dateTime={post.frontmatter.date}
                className="text-xs uppercase text-gray-600"
              >
                {formattedPostDate}
              </time>
            </div>
            <button
              onClick={() => {
                void navigate(-1);
              }}
              className="color-primary mt-4 text-base font-bold hover:underline"
            >
              Revenir en arrière
            </button>
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

export const Head: HeadFC<MarkdownRemark> = (
  props: HeadProps<MarkdownRemark>
) => (
  <Seo
    title={props.data.markdownRemark.frontmatter.title}
    description={props.data.markdownRemark.excerpt}
    pathname={props.location.pathname}
  ></Seo>
);
