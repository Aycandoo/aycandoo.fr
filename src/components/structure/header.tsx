import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { type FC, useState } from 'react';

const navigation = [
  { name: 'Accueil', to: '/' },
  { name: 'Services', to: '/#offerings' },
  { name: "L'équipe", to: '/#team' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contact', to: '/contact' },
];

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header
      className={
        'sticky inset-x-0 top-0 bg-gray-950 ' +
        (isMobileMenuOpen ? 'z-0' : 'z-50')
      }
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <div className="flex items-center">
              <StaticImage
                className=""
                height={40}
                src="../../images/aycandoo-color-logo.svg"
                alt=""
              />
              <span className="sr-only">{data?.site?.siteMetadata?.title}</span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => {
              setIsMobileMenuOpen(true);
            }}
          >
            <span className="sr-only">Open navigation menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              className="text-sm font-semibold leading-6 text-white"
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>

      <Transition
        show={isMobileMenuOpen}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog
          className="lg:hidden"
          onClose={() => {
            setIsMobileMenuOpen(false);
          }}
        >
          <DialogPanel className="fixed inset-y-0 z-50 w-full overflow-y-auto bg-white px-6 py-6">
            <DialogTitle>
              <div className="flex flex-row items-center justify-between">
                <Link to="/" className="-m-1.5 p-1.5">
                  <StaticImage
                    className=""
                    height={40}
                    src="../../images/aycandoo-black-logo.svg"
                    alt=""
                  />
                  <span className="sr-only">
                    {data?.site?.siteMetadata?.title}
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </DialogTitle>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map(({ name, to }) => (
                    <Link
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                      }}
                      key={name}
                      to={to}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </Transition>
    </header>
  );
};

export default Header;
