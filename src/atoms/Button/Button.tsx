import React, { FC } from 'react';
import { Link, To } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import cn from 'classnames';
import { ButtonSizeType, ButtonVariantType } from './types';
import { buttonStyles } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: To;
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
}

const Button: FC<Props> = ({
  children,
  className,
  href,
  size = 'default',
  type = 'button',
  variant = 'primary',
  ...rest
}: Props) => {
  const classes = twMerge(
    cn(
      'inline-block border-2 border-solid rounded-base text-secondary font-semibold text-center w-full sm:w-auto',
      {
        [`${buttonStyles.variant[variant]}`]: variant,
        [`${buttonStyles.size[size]}`]: size,
      },
      className
    )
  );

  if (href) {
    return (
      <Link className={classes} to={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;
