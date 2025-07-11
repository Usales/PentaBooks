import React from 'react';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import UserIcons from './UserIcons/UserIcons';
import './Header.css';

const Header = ({ onOpenAllBooks, onOpenFavoritos }) => {
  return (
    <header className="header header-animado">
      <div className="header__container">
        <Logo />
        <Navigation onOpenAllBooks={onOpenAllBooks} onOpenFavoritos={onOpenFavoritos} />
        <UserIcons />
      </div>
    </header>
  );
};

export default Header; 