import React, { ElementType } from 'react';
import cn from 'classnames';
import { twMerge } from 'tailwind-merge';
import { TypographyColorType, TypographyTransformType, TypographyVariantType } from './types';
import { typographyStyles } from './styles';

interface Props {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
  color?: TypographyColorType;
  transform?: TypographyTransformType;
  variant?: TypographyVariantType;
}

const Typography = React.forwardRef<HTMLElement, Props>(
  ({ as, className, children, color, transform, variant = 'paragraph', ...rest }, ref) => {
    const classes = twMerge(
      cn({
        [typographyStyles[variant].classes]: variant,
        [`text-${color}`]: color,
        [`${transform}`]: transform,
      }),
      className
    );

    return React.createElement(
      as || typographyStyles[variant].tag,
      {
        ...rest,
        ref,
        className: classes,
      },
      children
    );
  }
);

export default Typography;
