import React, { FC } from 'react';
import cn from 'classnames';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Container: FC<Props> = ({ className, children }) => (
  <div className={cn('max-w-[1300px] mx-auto px-6', className)}>{children}</div>
);

export default Container;
