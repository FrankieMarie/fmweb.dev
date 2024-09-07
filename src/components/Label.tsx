import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { Root } from '@radix-ui/react-label';
import { cn } from '../utils';

const Label = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      'font-medium leading-none text-lighter peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className
    )}
    {...props}
  />
));

export { Label };
