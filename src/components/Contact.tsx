import { Link } from '@tanstack/react-router';
import { UserPen } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="mt-40">
      <Link className="mb-8 block w-max" hash="contact">
        <h1 className="text-48 flex w-max items-center gap-2 font-dank font-semibold text-gold hover:text-gold/80">
          <UserPen size={48} /> Contact
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
    </section>
  );
}

export { Contact };
