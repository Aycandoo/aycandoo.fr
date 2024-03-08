import React, { FC, PropsWithChildren } from 'react';

type TeammateParams = PropsWithChildren<{
  name: string;
  description: string;
}>;

const Teammate: FC<TeammateParams> = ({ name, description, children }) => {
  return (
    <li className="flex gap-6 items-center">
      <div>{children}</div>
      <div className="flex flex-col gap-6 max-w-sm">
        <p className='text-2xl font-semibold'>{name}</p>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default Teammate;
