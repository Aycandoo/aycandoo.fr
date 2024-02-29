import React, { FC, PropsWithChildren, ReactNode } from 'react';

type ServiceItemParams = PropsWithChildren<{
  icon: ReactNode;
  title: string;
}>;

const ServiceItem: FC<ServiceItemParams> = ({ icon, title, children }) => {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <div className="flex flex-col items-center  ">
        {icon}
        <h3 className='text-xl font-bold'>{title}</h3>
      </div>
      <p className='text-center text-gray-700'>{children}</p>
    </div>
  );
};

export default ServiceItem;
