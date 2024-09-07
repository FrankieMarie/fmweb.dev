import { TextEffect } from './TextEffect';

function Hero() {
  return (
    <section
      id="about"
      className="flex h-[calc(100vh-6rem)] flex-col justify-center"
    >
      <h1 className="glitch-container flex flex-col gap-2 leading-none">
        <span className="text-48 font-semibold tracking-tighter text-lighter xxs:text-64 sm:text-80 md:text-100">
          Hi, I'm
        </span>
        <span className="glitch 1800:text-[13vw] 2000:text-[11vw] 2200:text-[10vw] 2500:text-[9vw] text-[18vw] lg:text-[16vw] xl:text-[15vw] 2xl:text-[14vw] nav:text-[12vw]">
          <span aria-hidden="true">Frankie</span>
          Frankie
          <span aria-hidden="true">Frankie</span>
        </span>
      </h1>
      <TextEffect
        className="text-20 mt-6 tracking-wide text-lighter sm:text-22 md:text-28 md:tracking-wider"
        per="char"
        preset="fade"
      >
        I develop websites and web applications
      </TextEffect>
    </section>
  );
}

export { Hero };
