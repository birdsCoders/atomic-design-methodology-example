import { FC } from 'react';
import cn from 'classnames';
import Category from '../../atoms/Category';
import DateFormatter, { DateProps } from '../../atoms/DateFormatter';

export interface CategoryDateProps extends DateProps {
  category: string | undefined;
  className?: string;
}

const CategoryDateRow: FC<CategoryDateProps> = ({ category, className, date }) => (
  <div className={cn('flex items-center gap-2', className)}>
    <Category>{category}</Category>
    <DateFormatter date={date} />
  </div>
);

export default CategoryDateRow;
