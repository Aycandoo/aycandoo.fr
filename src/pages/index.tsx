import type { HeadFC, PageProps } from 'gatsby';
import React from 'react';
import Seo from '../structure/seo';
import '../styles/global.css';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home Page"></Seo>;
