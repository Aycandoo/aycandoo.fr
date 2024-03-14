import React, { FC, PropsWithChildren } from 'react';

type TeammateParams = PropsWithChildren<{
  name: string;
  description: string;
}>;

const Teammate: FC<TeammateParams> = ({ name, description, children }) => {
  return (
    <li className="flex flex-col items-center gap-6 grayscale hover:grayscale-0 sm:flex-row">
      <div>{children}</div>
      <div className="flex max-w-sm flex-col gap-6">
        <p className="text-center text-2xl font-semibold sm:text-left">
          {name}
        </p>
        <p className="text-justify">{description}</p>
      </div>
    </li>
  );
};

export default Teammate;
