import React from 'react';
import logo from '../../../imagens/logo.svg';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} className="logo__image" alt="Penta Books Logo" />
      <p className="logo__text">
        <strong className='herobrand'>Penta</strong><span>Books</span>
      </p>
    </div>
  );
};

export default Logo; 