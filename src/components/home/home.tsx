import {
  ChatBubbleLeftEllipsisIcon,
  CodeBracketIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/24/outline';
import React, { useEffect, useState, type FC } from 'react';
import Section from '../structure/section';
import './home.scss';
import Offering from './offering';
import OfferingsList from './offerings-list';
import Team from './team';

const Home: FC = () => {
  const [pauseClass, setPauseClass] = useState('');

  const pauseAnimation = (): void => {
    setPauseClass('pause ');
  };

  const resumeAnimation = (): void => {
    setPauseClass('');
  };

  useEffect(() => {
    setTimeout(() => {
      pauseAnimation();
    }, 18000);
  }, []);

  return (
    <div className="flex flex-col pt-20">
      <div className="relative isolate mb-48 px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fce057] to-[#ffe8b6] opacity-60 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-screen-xl py-16 sm:py-24 lg:py-32">
          <div className="text-start">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 lg:text-8xl">
              <div className="relative flex flex-col justify-start align-middle leading-tight md:flex-row">
                <span>
                  AYCANDOO<span aria-hidden="true">*</span>
                </span>
                <div className={pauseClass + 'carousel-container pr-6 md:ml-4'}>
                  <ul>
                    <li>web apps</li>
                    <li>mobile apps</li>
                    <li>restfull APIs</li>
                    <li>hosting</li>
                    <li>support</li>
                    <li>training</li>
                    <li>web apps</li>
                  </ul>
                </div>
              </div>
            </h1>
            <p className="font-semibold">
              [<span aria-hidden="true">*</span>I can do : je peux faire]
            </p>
            <p className="mt-6 text-justify text-xl leading-8 text-gray-600">
              Fondée par deux développeurs expérimentés, AYCANDOO vous propose
              des solutions pour répondre à vos besoins en conseil IT et en
              développement web. Que ce soit pour renforcer vos équipes ou créer
              votre site web sur mesure, notre équipe vous accompagne à chaque
              étape de votre projet.
            </p>
          </div>
          <div className="my-4 flex items-center justify-end">
            {!pauseClass ? (
              <button
                onClick={pauseAnimation}
                aria-label="Mettre en pause l'animation"
                className="hover:ring-1 hover:ring-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="mx-1 my-0 h-6 w-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m6.25-7C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5" />
                </svg>
              </button>
            ) : (
              <button
                onClick={resumeAnimation}
                aria-label="Lire l'animation"
                className="hover:ring-1 hover:ring-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="mx-1 my-0 h-6 w-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                </svg>
              </button>
            )}
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#fce057] to-[#ffe8b6] opacity-60 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      <Section
        id="offerings"
        title="Des services adaptés à vos besoins"
        className="bg-gray-50"
      >
        <OfferingsList>
          <Offering
            icon={<ChatBubbleLeftEllipsisIcon className="h-12 w-12" />}
            title="Conseil IT"
          >
            Notre équipe vous accompagne dans la définition de vos stratégies
            technologiques, l&apos;optimisation de vos infrastructures et la
            résolution de vos défis informatiques les plus complexes. Nous vous
            aidons à tirer le meilleur parti de vos investissements
            technologiques et à atteindre vos objectifs métier avec succès.
          </Offering>
          <Offering
            icon={<CodeBracketIcon className="h-12 w-12" />}
            title="Développement"
          >
            Nous pouvons vous accompagner dans la réalisation de vos projets
            web, en offrant des services de développement, de déploiement et de
            maintenance. Confiez-nous la création de votre site web et il ne
            vous restera plus quà vous concentrer sur le coeur de votre
            entreprise en toute sérénité.
          </Offering>
          <Offering
            icon={<Square3Stack3DIcon className="h-12 w-12" />}
            title="Hébergement"
          >
            Nous offrons des services d&apos;hébergement robustes pour assurer
            la disponibilité constante de vos applications. Avec une
            infrastructure sécurisée et évolutive, nous nous engageons à fournir
            un environnement optimal pour assurer la performance de vos projets.
          </Offering>
        </OfferingsList>
      </Section>
      <Section id="team" title="Une équipe experimentée à votre écoute">
        <Team></Team>
      </Section>
    </div>
  );
};

export default Home;
