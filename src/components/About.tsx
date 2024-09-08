import { Link } from '@tanstack/react-router';
import { Crown } from 'lucide-react';
import { InView } from './InView';

function About() {
  return (
    <section id="about" className="mt-20">
      <Link className="mb-4 block w-max md:mb-8" hash="about">
        <h1 className="flex w-max items-center gap-2 font-dank text-32 font-semibold text-gold hover:text-gold/80 md:text-48">
          <Crown className="block md:hidden" size={32} />
          <Crown className="hidden md:block" size={48} /> About
        </h1>
      </Link>
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
        }}
        viewOptions={{ margin: '0px 0px -200px 0px' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <p className="mb-20 text-20 tracking-wide text-lighter md:text-28 lg:text-32">
          I am a web developer from the Upper Peninsula of Michigan. I
          specialize in building front end web applications with a focus on
          design, semantics, accessibility, and user experience. I have been
          working with HTML, CSS, TypeScript, and modern web frameworks
          professionally for several years. I particularly enjoy writing CSS and
          making things fun to interact with.
        </p>
      </InView>
    </section>
  );
}

export { About };
