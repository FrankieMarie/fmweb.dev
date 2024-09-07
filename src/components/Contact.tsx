import { Link } from '@tanstack/react-router';
import { UserPen } from 'lucide-react';
// import { Meteors } from './Meteors';

function Contact() {
  return (
    <section id="contact" className="relative mt-40">
      <Link className="mb-8 block w-max" hash="contact">
        <h1 className="flex w-max items-center gap-2 font-dank text-32 font-semibold text-gold hover:text-gold/80 md:text-48">
          <UserPen className="block md:hidden" size={32} />
          <UserPen className="hidden md:block" size={48} /> Contact
        </h1>
      </Link>
      <p>
        email me at{' '}
        <a className="cursor-pointer text-gold hover:text-gold/80">
          hello@fmweb.dev
        </a>{' '}
        or send me a message on{' '}
        <a
          className="cursor-pointer text-gold hover:text-gold/80"
          href="https://www.linkedin.com/in/frankiedenell/"
        >
          LinkedIn
        </a>
        .
      </p>
      {/* <Meteors number={3} /> */}
    </section>
  );
}

export { Contact };
