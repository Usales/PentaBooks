import React, { useState, useEffect } from 'react';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import UserIcons from './UserIcons/UserIcons';
import './Header.css';

const HEADER_SEEN_KEY = 'pentabooks_header_seen';

/** Header: logo, navegação, ícones (todos os livros / favoritos) */
const Header = ({ onOpenAllBooks, onOpenFavoritos }) => {
  const [scrolled, setScrolled] = useState(false);
  const [animate, setAnimate] = useState(() => !sessionStorage.getItem(HEADER_SEEN_KEY));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (animate) {
      sessionStorage.setItem(HEADER_SEEN_KEY, '1');
    }
  }, [animate]);

  const headerClass = `header${animate ? ' header-animado' : ''}${scrolled ? ' header--scrolled' : ''}`;

  return (
    <header className={headerClass} role="banner" aria-label="Cabeçalho do site">
      <div className="header__container">
        <Logo />
        <Navigation onOpenAllBooks={onOpenAllBooks} onOpenFavoritos={onOpenFavoritos} />
        <UserIcons />
      </div>
    </header>
  );
};

export default Header; 