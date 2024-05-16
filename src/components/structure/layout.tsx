import React, { type FC, type PropsWithChildren } from 'react';
import Header from './header';
import Footer from './footer';
import './layout.scss';

export type LayoutParams = PropsWithChildren<{
  headingLevel?: number;
}>;

const Layout: FC<LayoutParams> = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
