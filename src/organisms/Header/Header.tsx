import { FC } from 'react';
import Button from '../../atoms/Button';
import Container from '../../atoms/Container';
import Logo from '../../atoms/Logo';
import Menu from '../../molecules/Menu';

const Header: FC = () => (
  <header className="[grid-area:header] py-4 md:py-6">
    <Container className="flex items-center justify-between">
      <Logo />
      <div className="flex items-center gap-6">
        <Menu />
        <Button size="small" variant="secondary">
          Log in
        </Button>
      </div>
    </Container>
  </header>
);

export default Header;
