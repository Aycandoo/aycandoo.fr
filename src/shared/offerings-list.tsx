import React, { FC, PropsWithChildren } from 'react';

const OfferingsList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="flex w-full flex-col items-center gap-4 bg-gray-50 px-6 py-8 lg:px-8">
      <h2 className="text-center text-4xl  font-bold tracking-tight text-gray-900">
        Des services adaptés à vos besoins
      </h2>
      <ul className="grid grid-cols-1 gap-12 px-8 py-12 lg:grid-cols-3">
        {children}
      </ul>
    </section>
  );
};

export default OfferingsList;
