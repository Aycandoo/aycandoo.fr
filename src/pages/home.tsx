import {
  ChatBubbleLeftEllipsisIcon,
  CodeBracketIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/24/outline';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Customer from '../shared/customer';
import CustomersList from '../shared/customers-list';
import ServiceItem from '../shared/service-item';
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
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius a, semper congue, euismod non, mi.
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
      <section className="flex w-full flex-col items-center gap-4 bg-gray-50 px-6 py-8 lg:px-8">
        <h2 className="text-center text-4xl  font-bold tracking-tight text-gray-900">
          Des services adaptés à vos besoins
        </h2>
        <ul className="grid grid-cols-1 gap-12 px-8 py-12 lg:grid-cols-3">
          <li>
            <ServiceItem
              icon={<ChatBubbleLeftEllipsisIcon className="h-12 w-12" />}
              title="Conseil IT"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius a, semper congue, euismod non, mi.
            </ServiceItem>
          </li>
          <li>
            <ServiceItem
              icon={<CodeBracketIcon className="h-12 w-12" />}
              title="Développement"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius a, semper congue, euismod non, mi.
            </ServiceItem>
          </li>
          <li>
            <ServiceItem
              icon={<Square3Stack3DIcon className="h-12 w-12" />}
              title="Hébergement"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius a, semper congue, euismod non, mi.
            </ServiceItem>
          </li>
        </ul>
      </section>
      <section className="mt-48 flex flex-col items-center justify-center gap-4 px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900">
          Ils nous ont fait confiance
        </h2>
        <CustomersList>
          <Customer name="Lexis Nexis">
            <StaticImage
              className="opacity-50 grayscale"
              src="../images/customers-icons/lexisnexis.svg"
              height={40}
              alt=""
            />
          </Customer>
          <Customer name="Société Générale">
            <StaticImage
              className="opacity-50 grayscale"
              src="../images/customers-icons/sg.svg"
              height={40}
              alt=""
            />
          </Customer>
          <Customer name="Voluntis">
            <StaticImage
              className="opacity-50 grayscale"
              src="../images/customers-icons/voluntis.svg"
              height={40}
              alt=""
            />
          </Customer>
          <Customer name="Sede Veolia">
            <StaticImage
              className="opacity-50 grayscale"
              src="../images/customers-icons/sede-veolia.png"
              height={40}
              alt=""
            />
          </Customer>
          <Customer name="Colonna Facility">
            <StaticImage
              className="opacity-50 grayscale"
              src="../images/customers-icons/colonna-facility.png"
              height={60}
              alt=""
            />
          </Customer>
          <Customer name="Proximy">
            <StaticImage
              className="opacity-50 grayscale"
              src="../images/customers-icons/proximy.png"
              height={40}
              alt=""
            />
          </Customer>
          <Customer name="Ministère de l’Education Nationale">
            <StaticImage
              className="opacity-50 grayscale"
              src="../images/customers-icons/ministere-education-nationale-jeunesse.svg"
              height={90}
              alt=""
            />
          </Customer>
        </CustomersList>
      </section>
    </div>
  );
}
