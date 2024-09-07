import { useScroll } from '../hooks/useScroll';
import { Github } from './SVGs/Github';
import { LinkedIn } from './SVGs/LinkedIn';
import { Logo } from './Logo';

function Navbar() {
  const { scrolled } = useScroll();

  return (
    <nav
      className={`top-0 z-40 mx-auto flex h-24 w-full items-center border-none px-10 transition-all ${
        scrolled ? 'backdrop-blur-sm' : 'bg-transparent'
      } `}
    >
      <div className="mx-auto flex w-full max-w-screen-content items-center justify-between">
        <Logo />
        <div className="flex items-center gap-6 text-center">
          <a href="https://github.com/FrankieMarie" target="_blank">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/frankiedenell/" target="_blank">
            <LinkedIn />
          </a>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
