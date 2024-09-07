import { cn } from '../utils';
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion';
import { InputHTMLAttributes, forwardRef, useState, MouseEvent } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 250; // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
      currentTarget,
      clientX,
      clientY
    }: MouseEvent<HTMLDivElement, MouseEvent>) {
      const { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
          var(--gold),
          transparent 80%
        )
      `
        }}
        onMouseMove={(e) =>
          handleMouseMove(
            e as unknown as MouseEvent<HTMLDivElement, MouseEvent>
          )
        }
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-lg p-[2px] transition duration-300"
      >
        <input
          type={type}
          className={cn(
            `duration-400 flex h-12 w-full rounded-md border-none bg-darkest px-3 py-2 text-sm text-lightest shadow-[0px_0px_1px_1px_var(--dark)] transition file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-medium focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-medium disabled:cursor-not-allowed disabled:opacity-50`,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);

export { Input };
