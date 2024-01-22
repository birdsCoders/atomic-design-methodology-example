import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import cn from 'classnames';
import { PanelVariantType } from './types';
import { panelStyles } from './styles';

interface Props {
  className?: string;
  children: React.ReactNode;
  variant?: PanelVariantType;
}

const Panel: FC<Props> = ({ className, children, variant = 'primary' }) => (
  <div
    className={twMerge(
      cn(
        'rounded-xl p-6 md:p-16',
        {
          [panelStyles[variant]]: variant,
        },
        className
      )
    )}
  >
    {children}
  </div>
);

export default Panel;
