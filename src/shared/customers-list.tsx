import React, { FC, PropsWithChildren } from 'react';

const CustomersList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="mt-48 flex flex-col items-center justify-center gap-4 px-6 lg:px-8">
      <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900">
        Ils nous ont fait confiance
      </h2>
      <ul className="flex w-full flex-wrap items-center justify-center gap-12 px-8 py-12 lg:gap-20">
        {children}
      </ul>
    </section>
  );
};

export default CustomersList;
