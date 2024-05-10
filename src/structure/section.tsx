import React, {
  type FC,
  type PropsWithChildren,
  useEffect,
  useState,
} from 'react';

export type SectionParams = PropsWithChildren<{
  id: string;
  title: string;
  headingLevel?: number;
  className?: string;
}>;

const Section: FC<SectionParams> = ({
  id,
  title,
  headingLevel = 2,
  className,
  children,
}) => {
  const [classList, setClassList] = useState(
    'mb-48 flex w-full scroll-mt-24 flex-col items-center gap-4 px-6 lg:px-16 2xl:px-32 py-8 lg:px-8'
  );

  useEffect(() => {
    if (className) {
      setClassList((list) => `${list} ${className}`);
    }
  }, [className]);

  return (
    <section id={id} className={classList}>
      {title && headingLevel === 1 && (
        <h1 className="text-center text-4xl  font-bold tracking-tight text-gray-900">
          {title}
        </h1>
      )}
      {title && headingLevel === 2 && (
        <h2 className="text-center text-4xl  font-bold tracking-tight text-gray-900">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default Section;
