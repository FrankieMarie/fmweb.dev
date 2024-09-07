import { Link } from '@tanstack/react-router';
import { Crown } from 'lucide-react';

function About() {
  return (
    <section className="mt-20">
      <Link className="mb-4 block w-max md:mb-8" hash="about">
        <h1 className="flex w-max items-center gap-2 font-dank text-32 font-semibold text-gold hover:text-gold/80 md:text-48">
          <Crown className="block md:hidden" size={32} />
          <Crown className="hidden md:block" size={48} /> About
        </h1>
      </Link>
      <p className="mb-10 text-32 text-light">
        I am a web developer from the Upper Peninsula of Michigan. I specialize
        in building front end web applications with a focus on design,
        semantics, accessibility, and user experience. I have been working with
        TypeScript and modern web frameworks professionally for over 6 years. I
        particularly enjoy writing CSS and making things fun to interact with.
      </p>
    </section>
  );
}

export { About };
