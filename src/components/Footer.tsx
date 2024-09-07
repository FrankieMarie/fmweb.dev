import { Github } from '../assets/SVGs/Github';
import { LinkedIn } from '../assets/SVGs/LinkedIn';

export const Footer = () => {
  return (
    <footer className="relative z-10 mt-40">
      <div className="mx-auto flex h-24 w-full max-w-screen-nav items-center justify-between px-10">
        <div className="flex items-center gap-2 text-14">
          <div className="flex items-baseline">
            <span className="font-bold text-gold">FM</span>
            <span className="font-normal">WebDev</span>
          </div>
          <span className="text-light">&copy;</span>{' '}
          <span className="text-light">twentytwentyfour</span>
        </div>

        <div className="flex justify-end gap-6">
          <a href="https://github.com/FrankieMarie" target="_blank">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/frankiedenell/" target="_blank">
            <LinkedIn />
          </a>
        </div>
      </div>
    </footer>
  );
};
