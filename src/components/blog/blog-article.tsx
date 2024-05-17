import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import {
  graphql,
  navigate,
  type HeadFC,
  type HeadProps,
  type PageProps,
} from 'gatsby';
import React, { type FC } from 'react';
import { type MarkdownRemark } from '../../models/markdown-remark';
import Layout from '../structure/layout';
import Section from '../structure/section';
import Seo from '../structure/seo';
import './blog-article.scss';

export interface BlogArticleParams {
  markdownRemark: MarkdownRemark;
}

const BlogArticle: FC<PageProps<BlogArticleParams>> = ({ data, location }) => {
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
          <header className="mb-12 w-full">
            <button
              type="button"
              onClick={() => {
                void (location.state ? navigate(-1) : navigate('/blog'));
              }}
              className="color-primary mb-4 flex flex-row items-center gap-2 rounded bg-gray-950 px-4 py-2 text-sm font-bold hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-[#ffdd57] focus-visible:ring-offset-2"
            >
              {location.state != null && (
                <>
                  <ArrowLeftIcon className="h-5 w-5" />
                  <span>Revenir en arrière</span>
                </>
              )}
              {!location.state && (
                <>
                  <span>Aller à la page du blog</span>
                </>
              )}
            </button>

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

export const Head: HeadFC<BlogArticleParams> = (
  props: HeadProps<BlogArticleParams>
) => (
  <Seo
    title={props.data.markdownRemark.frontmatter.title}
    description={props.data.markdownRemark.excerpt}
    pathname={props.location.pathname}
  ></Seo>
);
