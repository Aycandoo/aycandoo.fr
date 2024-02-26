import React, { FC, PropsWithChildren } from 'react';
import Header from './header';
import Footer from './footer';

export type LayoutParams = PropsWithChildren<{
  headingLevel?: number;
}>;

const Layout: FC<LayoutParams> = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main className="relative px-6 pt-20 lg:px-8">{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
