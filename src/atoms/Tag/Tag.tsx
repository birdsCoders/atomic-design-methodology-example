import { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const Tag: FC<Props> = ({ children }) => (
  <div className="inline-block px-3 py-1.5 bg-primary rounded-base text-secondary text-xs font-bold">
    {children}
  </div>
);

export default Tag;
