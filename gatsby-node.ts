import path from 'node:path';
import type { GatsbyNode } from 'gatsby';

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`./src/shared/blog-article.tsx`);
  const result: any = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }: { node: any }) => {
    const slug = node.frontmatter.slug;
    createPage({
      path: `blog/${slug}`,
      component: blogPostTemplate,
      context: {
        slug,
      },
    });
  });
};
