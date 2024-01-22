import { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Image from '../Image';
import NoUserImage from '../../assets/image.jpeg';

interface Props {
  name: string | undefined;
  onClick?: VoidFunction;
  photo: string | undefined;
  url?: string;
}

const avatarClasses = 'relative h-8 w-8 rounded-full overflow-hidden';

const Avatar: FC<Props> = ({ name, onClick, photo, url }) => {
  const avatarImage = <Image alt={name} src={photo || NoUserImage} />;

  if (url) {
    return (
      <Link to={url} className={cn('block', avatarClasses)}>
        {avatarImage}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button className={avatarClasses} onClick={onClick} type="button">
        {avatarImage}
      </button>
    );
  }

  return <div className={avatarClasses}>{avatarImage}</div>;
};

export default Avatar;
