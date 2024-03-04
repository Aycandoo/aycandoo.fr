import React, { FC, PropsWithChildren } from 'react';

const CustomersList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ul className="flex w-full flex-wrap items-center justify-center gap-12 px-8 py-12 lg:gap-20">
      {children}
    </ul>
  );
};

export default CustomersList;
