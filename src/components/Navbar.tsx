import { AnimatedBackground } from './AnimatedBackground';
import { Link } from '@tanstack/react-router';
import { useScroll } from '../hooks/useScroll';
import { Github } from '../assets/SVGs/Github';
import { LinkedIn } from '../assets/SVGs/LinkedIn';
import { Logo } from './Logo';

function Navbar() {
  const { scrolled } = useScroll();

  return (
    <nav
      className={`sticky top-0 z-40 mx-auto flex h-24 w-full items-center border-none px-8 transition-all ${
        scrolled ? 'backdrop-blur-sm' : 'bg-transparent'
      } `}
    >
      <div className="mx-auto flex w-full max-w-screen-nav items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4 text-center">
          <AnimatedBackground
            className="rounded-lg bg-gold dark:bg-gold"
            transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.3
            }}
            enableHover
          >
            <Link
              data-id="projects"
              className={`px-2 py-0.5 text-18 transition-colors duration-300 hover:text-darkest`}
            >
              Projects
            </Link>
            <Link
              data-id="contact"
              className={`px-2 py-0.5 text-18 transition-colors duration-300 hover:text-darkest`}
            >
              Contact
            </Link>
          </AnimatedBackground>
          <a
            className="px-2"
            href="https://github.com/FrankieMarie"
            target="_blank"
          >
            <Github />
          </a>
          <a
            className="px-2"
            href="https://www.linkedin.com/in/frankiedenell/"
            target="_blank"
          >
            <LinkedIn />
          </a>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
