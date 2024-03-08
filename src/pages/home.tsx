import {
  ChatBubbleLeftEllipsisIcon,
  CodeBracketIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import Offering from '../shared/offering';
import OfferingsList from '../shared/offerings-list';
import Team from '../shared/team';
import Section from '../structure/section';
import './home.css';

export default function Home() {
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
              <div className="relative flex flex-col justify-start align-middle leading-tight lg:flex-row">
                <span>AYCANDOO*</span>
                <div className="carousel-container pr-6 lg:ml-4">
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
            <p className="font-semibold">[*I can do : je peux faire]</p>
            <p className="mt-6 text-xl text-justify leading-8 text-gray-600">
              Fondée par deux développeurs fullstack chevronnés, Aycandoo est
              spécialisée dans le conseil IT, offrant des solutions sur mesure
              pour répondre aux besoins uniques de nos clients. Que ce soit pour
              des missions longues ou le développement complet de projets web,
              notre équipe est là pour vous accompagner à chaque étape du
              processus.
            </p>
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
            Découvrez nos services de conseil IT chez Aycandoo, conçus pour
            répondre à vos besoins les plus spécifiques. Notre équipe vous
            accompagne dans la définition de vos stratégies technologiques,
            l'optimisation de vos infrastructures et la résolution de vos défis
            informatiques les plus complexes. Nous vous aidons à tirer le
            meilleur parti de vos investissements technologiques et à atteindre
            vos objectifs métier avec succès.
          </Offering>
          <Offering
            icon={<CodeBracketIcon className="h-12 w-12" />}
            title="Développement"
          >
            Découvrez le potentiel illimité de vos idées avec notre service de
            développement chez Aycandoo. Nos développeurs fullstack expérimentés
            mettent en œuvre des solutions novatrices, du concept à la
            réalisation, assurant des projets web et mobiles qui dépassent vos
            attentes.
          </Offering>

          <Offering
            icon={<Square3Stack3DIcon className="h-12 w-12" />}
            title="Hébergement"
          >
            Confiez la gestion de votre infrastructure à Aycandoo, votre
            partenaire d'hébergement fiable. Nous offrons des services
            d'hébergement robustes pour assurer la disponibilité constante de
            vos applications. Avec une infrastructure sécurisée et évolutive,
            nous nous engageons à fournir un environnement optimal pour assurer
            la performance de vos projets.
          </Offering>
        </OfferingsList>
      </Section>
      <Section id="team" title="Une équipe experimenté à votre écoute">
        <Team></Team>
      </Section>
    </div>
  );
}
