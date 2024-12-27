export function Logo() {
  return (
    <button
      className="flex cursor-pointer items-baseline"
      onClick={() => window.scrollTo(0, 0)}
    >
      <span className="text-18 font-bold text-gold">FM</span>
      <span className="text-18 font-normal">WebDev</span>
    </button>
  );
}
