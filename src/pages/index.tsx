import type { HeadFC, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../structure/layout';
import Seo from '../structure/seo';
import '../styles/global.scss';
import Home from './home';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Accueil"></Seo>;
