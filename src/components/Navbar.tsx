import { Github } from './SVGs/Github';
import { LinkedIn } from './SVGs/LinkedIn';
import { Logo } from './Logo';
import Codepen from './SVGs/Codepen';

function Navbar() {
  return (
    <nav className="mx-auto flex h-24 w-full items-center border-none px-10">
      <div className="mx-auto flex w-full max-w-screen-content items-center justify-between">
        <Logo />
        <div className="flex items-center gap-6 text-center">
          <a
            className="z-20"
            href="https://github.com/FrankieMarie"
            target="_blank"
          >
            <Github />
          </a>
          <a
            className="z-20"
            href="https://codepen.io/frankiemarie"
            target="_blank"
          >
            <Codepen />
          </a>
          <a
            className="z-20"
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
