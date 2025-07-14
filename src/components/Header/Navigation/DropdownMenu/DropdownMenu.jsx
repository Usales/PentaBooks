import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import './DropdownMenu.css';

const MENU_OPTIONS = [
  { id: 'categories', label: 'Categorias' },
  { id: 'favorites', label: 'Favoritos' }
];

const DropdownMenu = ({ isOpen, onOpenAllBooks, onOpenFavoritos }) => {
  if (!isOpen) return null;

  const handleItemClick = (id) => {
    if (id === 'categories') {
      onOpenAllBooks();
    }
    if (id === 'favorites') {
      onOpenFavoritos();
    }
  };

  return (
    <ul className="dropdown-menu">
      {MENU_OPTIONS.map((option) => (
        <MenuItem 
          key={option.id} 
          {...option} 
          onItemClick={handleItemClick}
        />
      ))}
    </ul>
  );
};

export default DropdownMenu; 