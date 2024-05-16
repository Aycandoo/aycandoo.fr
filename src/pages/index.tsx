import type { HeadFC, HeadProps, PageProps } from 'gatsby';
import 'prismjs/themes/prism-okaidia.css';
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

export const Head: HeadFC = (props: HeadProps) => (
  <Seo
    title="Accueil"
    pathname={props.location.pathname}
    description="La société AYCANDOO a été cofondée par Jérémy Brochard et Céline Ung, deux développeurs fullstack expérimentés. Nous proposons des solutions sur mesure en conseil IT, en développement web et pour de l'hébergement."
  ></Seo>
);
