interface Props {
  className?: string;
}

export const CarrotUp = ({ className }: Props) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        fill="none"
        className="stroke-primary hover:stroke-secondary mx-auto mb-2 h-8 w-8 animate-bounce cursor-pointer transition-all"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 15.75 7.5-7.5 7.5 7.5"
        />
      </svg>
    </div>
  );
};
