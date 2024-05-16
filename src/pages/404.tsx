import { Link, type HeadFC, type HeadProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { type FC } from 'react';
import Layout from '../structure/layout';
import Section from '../structure/section';
import Seo from '../structure/seo';

const NotFound: FC = () => {
  return (
    <Layout>
      <Section title="" id="notFound" className="mb-0">
        <div className="flex flex-col gap-12 py-6 sm:flex-row">
          <StaticImage
            className="hidden rounded-xl md:block"
            src="../images/404.jpg"
            height={200}
            width={200}
            alt=""
          />
          <div className="flex flex-col justify-center">
            <h1 className="mb-10 text-4xl font-bold tracking-tight text-gray-900">
              Page introuvable
            </h1>
            <p className="mb-4">
              Oops ! La page que vous recherchez n&apos;existe pas ou a été
              déplacé.
            </p>
            <Link
              to="/"
              className="color-primary text-base font-bold hover:underline"
            >
              Revenir à l&apos;accueil
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default NotFound;

export const Head: HeadFC = (props: HeadProps) => (
  <Seo
    title="Page introuvable"
    description="La page que vous recherchez n'existe pas ou a été déplacé. Vous pouvez cliquer sur le bouton pour revenir à l'accueil."
    pathname={props.location.pathname}
  ></Seo>
);
