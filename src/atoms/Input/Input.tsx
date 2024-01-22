import React from 'react';
import cn from 'classnames';
import { twMerge } from 'tailwind-merge';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, Props>(({ className, ...props }, ref) => (
  <input
    className={twMerge(
      cn(
        'px-6 h-[3.5rem] w-full bg-white border-2 border-solid border-border rounded-base text-lg text-main',
        className
      )
    )}
    ref={ref}
    {...props}
  />
));

export default Input;
