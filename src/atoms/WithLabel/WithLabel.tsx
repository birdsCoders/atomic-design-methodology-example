import React from 'react';
import cn from 'classnames';

interface Props {
  children: React.ReactNode;
  className?: string;
  error?: any;
  htmlFor?: string;
  isLabelHidden?: boolean;
  label: string;
}

const WithLabel: React.FC<Props> = ({
  children,
  className,
  error,
  htmlFor,
  isLabelHidden,
  label,
}) => (
  <div className={cn('onlyChild:mb-4', className)}>
    <label className={cn('block mb-1', { 'element-hidden': isLabelHidden })} htmlFor={htmlFor}>
      {label}
    </label>
    {children}
    {error && <div className="text-xs text-rose-500 font-semibold mt-1 ml-4">{error}</div>}
  </div>
);

export default WithLabel;
