import React, { type FC, type PropsWithChildren } from 'react';

const OfferingsList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ul className="grid grid-cols-1 gap-12 px-8 py-12 lg:grid-cols-3">
      {children}
    </ul>
  );
};

export default OfferingsList;
