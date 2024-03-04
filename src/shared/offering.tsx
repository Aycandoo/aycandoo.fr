import React, { FC, PropsWithChildren, ReactNode } from 'react';

type OfferingParams = PropsWithChildren<{
  icon: ReactNode;
  title: string;
}>;

const Offering: FC<OfferingParams> = ({ icon, title, children }) => {
  return (
    <li>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center">
          {icon}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-center text-gray-700">{children}</p>
      </div>
    </li>
  );
};

export default Offering;
