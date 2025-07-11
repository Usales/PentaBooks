import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import './Navigation.css';

const Navigation = ({ onOpenAllBooks, onOpenFavoritos }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <button 
        className={`navigation__toggle ${isMenuOpen ? 'navigation__toggle--active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="navigation__arrow">▼</span>
      </button>
      <DropdownMenu isOpen={isMenuOpen} onOpenAllBooks={onOpenAllBooks} onOpenFavoritos={onOpenFavoritos} />
    </nav>
  );
};

export default Navigation; 