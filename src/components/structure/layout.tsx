import React, { type FC, type PropsWithChildren } from 'react';
import Footer from './footer';
import Header from './header';
import './layout.scss';

export type LayoutParams = PropsWithChildren<{
  headingLevel?: number;
}>;

const Layout: FC<LayoutParams> = ({ children }) => {
  return (
    <>
      <a href="#main" className="skip-link">
        Aller au contenu principal
      </a>
      <Header></Header>
      <main tabIndex={-1} id="main">
        {children}
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
