import React, { FC } from 'react';
import cn from 'classnames';
import { twMerge } from 'tailwind-merge';
import { GridGapType, GridVariantType } from './types';
import { gridStyles } from './styles';

type Props = {
  children: React.ReactNode;
  className?: string;
  gap?: GridGapType;
  variant?: GridVariantType;
};

const Grid: FC<Props> = ({ children, className, gap = '8', variant = 'cols-3' }) => (
  <div
    className={twMerge(
      cn(
        'grid',
        {
          [gridStyles.variant[variant]]: variant,
          [`gap-${gap}`]: gap,
        },
        className
      )
    )}
  >
    {children}
  </div>
);

export default Grid;
