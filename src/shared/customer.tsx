import React, { FC, PropsWithChildren } from 'react';

type CustomerParams = PropsWithChildren<{
  name: string;
}>;

const Customer: FC<CustomerParams> = ({ name, children }) => {
  return (
    <>
      <span className="sr-only">{name}</span>
      {children}
    </>
  );
};

export default Customer;
