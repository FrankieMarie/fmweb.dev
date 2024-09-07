import { cn } from '../utils';
import { useMotionValue, motion, useMotionTemplate } from 'framer-motion';
import { ReactNode, MouseEvent } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export const HiliteGrid = ({
  children,
  className,
  containerClassName
}: Props) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY
  }: MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className={cn(
        'group relative flex w-full items-center justify-center p-6 md:py-10 lg:py-20',
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="bg-dot-thick-dark/75 pointer-events-none absolute inset-0" />
      <motion.div
        className="bg-dot-thick-gold/65 pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `
        }}
      />

      <div className={cn('relative z-20', className)}>{children}</div>
    </div>
  );
};
