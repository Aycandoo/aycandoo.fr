import path from 'node:path';
import type { GatsbyNode } from 'gatsby';

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;
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
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/shared/blog-article.tsx`),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
