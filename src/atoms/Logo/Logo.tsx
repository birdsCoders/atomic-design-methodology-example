import { FC } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/logo.svg';

const Logo: FC = () => (
  <Link className="inline-block" to="/">
    <img src={LogoImage} alt="Site title" />
  </Link>
);

export default Logo;
