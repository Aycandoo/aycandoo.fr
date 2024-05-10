import type { GatsbyConfig } from 'gatsby';
import path from "node:path";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Aycandoo.fr',
    siteUrl: 'https://aycandoo.fr',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AYCANDOO`,
        short_name: `AYCANDOO`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#f4de71`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `src/images/favicons/android-icon.png`,
            sizes: `196x196`,
            type: `image/png`,
          },
          {
            src: `src/images/favicons/iphone-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-KTRBWK0LKE'],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: path.join(__dirname, 'src', 'assets'),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `content`,
              path: path.join(__dirname, 'src', 'assets'),
            },
          },
          `gatsby-transformer-remark`,
        ],
      },
    },
  ],
};

export default config;
