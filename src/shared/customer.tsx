import React, { FC, PropsWithChildren } from 'react';

type CustomerParams = PropsWithChildren<{
  name: string;
}>;

const Customer: FC<CustomerParams> = ({ name, children }) => {
  return (
    <li className="max-w-28 md:max-w-40 lg:max-w-48">
      <span className="sr-only">{name}</span>
      {children}
    </li>
  );
};

export default Customer;
