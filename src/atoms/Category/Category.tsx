import { FC } from 'react';
import cn from 'classnames';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Category: FC<Props> = ({ children, className }) => (
  <div className={cn('text-sm font-semibold', className)}>{children}</div>
);

export default Category;
