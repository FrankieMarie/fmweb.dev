import { Link } from '@tanstack/react-router';
import { UserPen } from 'lucide-react';
import { cn } from '../utils';
import { Label } from './Label';
import { Input } from './Input';
import { FormEvent } from 'react';

function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <section id="contact" className="relative mt-20 md:mt-40">
      <Link className="mb-8 block w-max" hash="contact">
        <h1 className="flex w-max items-center gap-2 font-dank text-32 font-semibold text-gold hover:text-gold/80 md:text-48">
          <UserPen className="block md:hidden" size={32} />
          <UserPen className="hidden md:block" size={48} /> Contact
        </h1>
      </Link>
      <p className="text-18">
        Email me at{' '}
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
      <form className="my-10" onSubmit={handleSubmit}>
        <div className="mb-6 flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Beatrix" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Kiddo" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="thebride@kb.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="password">Message</Label>
          <Input
            id="message"
            placeholder="Clark Kent is Superman's critique on the whole human race."
            type="password"
          />
        </LabelInputContainer>
        <button
          className="group/btn relative mt-12 block h-12 w-full rounded-md font-medium uppercase text-lighter shadow-[0px_0px_1px_1px_var(--dark)]"
          type="submit"
        >
          Submit
          <BottomGradient />
        </button>
      </form>
    </section>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="via-lightGreen absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex w-full flex-col space-y-2', className)}>
      {children}
    </div>
  );
};

export { Contact };
