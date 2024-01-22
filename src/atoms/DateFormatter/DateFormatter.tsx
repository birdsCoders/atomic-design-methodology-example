import { FC } from 'react';
import { format } from 'date-fns/format';

export interface DateProps {
  date: string | number | Date | undefined;
}

const DateFormatter: FC<DateProps> = ({ date }) => (
  <div className="text-sm text-light">{format(date || new Date(), 'MMMM dd, yyyy')}</div>
);

export default DateFormatter;
