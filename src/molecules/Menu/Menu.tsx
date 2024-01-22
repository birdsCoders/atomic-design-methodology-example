import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  {
    href: '/services',
    title: 'Services',
  },
  {
    href: '/about',
    title: 'About',
  },
];

const Menu: FC = () => (
  <nav className="flex gap-6">
    {menuItems.map((link) => (
      <NavLink
        className={({ isActive }) =>
          [
            'border-b-[0.1rem] border-solid hover:border-primary font-semibold',
            isActive ? 'border-primary' : 'border-transparent',
          ].join(' ')
        }
        key={link.href}
        to={link.href}
      >
        {link.title}
      </NavLink>
    ))}
  </nav>
);

export default Menu;
