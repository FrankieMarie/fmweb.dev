import { Link } from '@tanstack/react-router';
import { CarrotUp } from './SVGs/CarrotUp';

export const Footer = () => {
  return (
    <footer className="relative z-10 mt-40">
      <Link hash="top">
        <CarrotUp className="mx-auto w-full text-gold" />
      </Link>

      <div className="mx-auto flex h-24 w-full max-w-screen-content justify-center">
        <div className="flex items-center gap-2 text-14">
          <div className="flex items-baseline">
            <span className="font-bold text-gold">FM</span>
            <span className="font-normal">WebDev</span>
          </div>
          <span className="text-light">&copy;</span>{' '}
          <span className="text-light">twentytwentyfour</span>
        </div>
      </div>
    </footer>
  );
};
