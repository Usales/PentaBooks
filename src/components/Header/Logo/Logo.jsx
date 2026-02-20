import React from 'react';
import logo from '../../../imagens/logo.svg';
import './Logo.css';

const Logo = () => {
  const handleClick = (e) => {
    if (window.location.hash === '#' || window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <a href="#" className="logo" onClick={handleClick} aria-label="PentaBooks - Voltar ao início">
      <img src={logo} className="logo__image" alt="" aria-hidden="true" />
      <span className="logo__text">
        <strong className="herobrand">Penta</strong>Books
      </span>
    </a>
  );
};

export default Logo; 