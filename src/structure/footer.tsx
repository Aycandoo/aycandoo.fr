import { Link } from 'gatsby';
import React, { type FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="flex h-52 w-full flex-col items-center justify-center gap-12 bg-gray-950 text-white">
      <div className="flex flex-col items-center ">
        <h2 className="text-center text-xl font-bold text-white">
          Une question? Un projet?
        </h2>
        <Link
          to="/contact"
          className="color-primary text-base font-bold hover:underline"
        >
          Contactez-nous
        </Link>
      </div>
      &copy; 2024 AYCANDOO. Tous droits réservés
    </footer>
  );
};

export default Footer;
