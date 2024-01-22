import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import cn from 'classnames';

interface Props extends LinkProps {
  children: React.ReactNode;
}

const LinkBase: FC<Props> = ({ children, className, to, ...rest }: Props) => (
  <Link
    className={twMerge(
      cn('border-b-[0.1rem] border-solid border-transparent hover:border-[currentColor]', className)
    )}
    to={to}
    {...rest}
  >
    {children}
  </Link>
);

export default LinkBase;
