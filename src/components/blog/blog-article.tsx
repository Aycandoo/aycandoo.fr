import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import {
  graphql,
  navigate,
  type HeadFC,
  type HeadProps,
  type PageProps,
} from 'gatsby';
import React, { type ReactNode, type FC } from 'react';
import { type MarkdownRemark } from '../../models/markdown-remark';
import Layout from '../structure/layout';
import Section from '../structure/section';
import Seo from '../structure/seo';
import './blog-article.scss';
import { twMerge } from 'tailwind-merge';

export interface BlogArticleParams {
  markdownRemark: MarkdownRemark;
}

const BlogArticle: FC<PageProps<BlogArticleParams>> = ({ data, location }) => {
  const post = data.markdownRemark;
  const dateTimeFormat = new Intl.DateTimeFormat('fr', { dateStyle: 'long' });
  const formattedPostDate = dateTimeFormat.format(
    new Date(post.frontmatter.date)
  );

  const GoBackButton = ({
    state,
    className,
  }: {
    state: any;
    className?: string;
  }): ReactNode => (
    <button
      type="button"
      onClick={() => {
        void (state ? navigate(-1) : navigate('/blog'));
      }}
      className={twMerge(
        'flex flex-row items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold drop-shadow-md hover:ring-2 hover:ring-black',
        className
      )}
    >
      {!state ? (
        <span>Aller à la page du blog</span>
      ) : (
        <>
          <ArrowLeftIcon className="h-4 w-4" />
          <span>Revenir en arrière</span>
        </>
      )}
    </button>
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
          <GoBackButton className="mb-12" state={location.state} />
          <header className="mb-12 w-full">
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
          <GoBackButton className="mt-12" state={location.state} />
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
