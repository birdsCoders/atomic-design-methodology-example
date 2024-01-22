import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import cn from 'classnames';
import Image from '../Image';
import DefaultImage from '../../assets/image.jpeg';
import { PhotoAspectRatioType } from './types';

interface Props {
  alt?: string;
  aspectRatio?: PhotoAspectRatioType;
  className?: string;
  image: string | undefined;
}

const Photo: FC<Props> = ({ alt, aspectRatio = 'video', className, image }) => (
  <div
    className={twMerge(
      cn(
        'relative rounded-2xl overflow-hidden',
        {
          [`aspect-video`]: aspectRatio,
        },
        className
      )
    )}
  >
    <Image alt={alt} src={image || DefaultImage} />
  </div>
);

export default Photo;
