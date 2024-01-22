import { FC } from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image: FC<Props> = ({ ...props }) => (
  <img alt={props.alt} className="absolute bottom-0 left-0 h-full w-full object-cover" {...props} />
);

export default Image;
