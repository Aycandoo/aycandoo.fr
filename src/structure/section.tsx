import React, { FC, PropsWithChildren, useEffect, useState } from 'react';

export type SectionParams = PropsWithChildren<{
  id: string;
  title: string;
  className?: string;
}>;

const Section: FC<SectionParams> = ({ id, title, className, children }) => {
  const [classList, setClassList] = useState(
    'mb-48 last:mb-0 flex w-full scroll-mt-24 flex-col items-center gap-4 px-6 py-8 lg:px-8'
  );

  useEffect(() => {
    if (className) {
      setClassList((list) => `${list} ${className}`);
    }
  }, [className]);

  return (
    <section id={id} className={classList}>
      <h2 className="text-center text-4xl  font-bold tracking-tight text-gray-900">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
