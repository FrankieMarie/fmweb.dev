import { Link } from '@tanstack/react-router';
import { CarrotDown } from './SVGs/CarrotDown';
import { TextEffect } from './TextEffect';

function Hero() {
  return (
    <section className="relative flex h-[calc(100vh-6rem)] flex-col justify-center">
      <h1 className="glitch-container flex flex-col gap-2 leading-none">
        <span className="text-48 font-semibold tracking-tighter text-lighter xxs:text-64 sm:text-80 md:text-100">
          Hi, I'm
        </span>
        <span className="glitch text-[18vw] lg:text-[16vw] xl:text-[15vw] 2xl:text-[14vw] 1800:text-[13vw] nav:text-[12vw] 2000:text-[11vw] 2200:text-[10vw] 2500:text-[9vw]">
          <span aria-hidden="true">Frankie</span>
          Frankie
          <span aria-hidden="true">Frankie</span>
        </span>
      </h1>
      <TextEffect
        className="mt-6 text-20 tracking-wide text-lighter sm:text-22 md:text-28 md:tracking-wider"
        per="char"
        preset="fade"
      >
        I develop websites and web applications
      </TextEffect>

      <Link hash="about">
        <CarrotDown className="absolute bottom-6 mx-auto w-full text-gold" />
      </Link>
    </section>
  );
}

export { Hero };
