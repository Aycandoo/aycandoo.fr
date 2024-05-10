import React, { type FC } from 'react';
import Layout from '../structure/layout';
import Section from '../structure/section';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const NotFound: FC = () => {
  return (
    <Layout>
      <Section title="" id="notFound" className="mb-0">
        <div className="flex flex-col gap-12 py-6 sm:flex-row">
          <StaticImage
            className="max-w-80 rounded-xl"
            src="../images/404.jpg"
            height={320}
            width={320}
            alt="pelle jaune à moitié enterrée sur le sable près de l'océan - source: pexels.com"
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
