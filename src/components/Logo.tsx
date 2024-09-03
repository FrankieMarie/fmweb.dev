import { Link } from '@tanstack/react-router';

export const Logo = () => {
  return (
    <Link
      className="flex cursor-pointer items-baseline"
      to="/"
      onClick={() => window.scrollTo(0, 0)}
    >
      <span className="text-18 font-bold text-gold">FM</span>
      <span className="text-18 font-normal">WebDev</span>
    </Link>
  );
};
