import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import './DropdownMenu.css';

const MENU_OPTIONS = [
  { id: 'categories', label: 'Categorias' },
  { id: 'favorites', label: 'Favoritos' }
];

const DropdownMenu = ({ id, isOpen, onClose, onOpenAllBooks, onOpenFavoritos }) => {
  if (!isOpen) return null;

  const handleItemClick = (itemId) => {
    if (itemId === 'categories') {
      onOpenAllBooks();
    }
    if (itemId === 'favorites') {
      onOpenFavoritos();
    }
    onClose();
  };

  return (
    <ul
      id={id}
      className="dropdown-menu"
      role="menu"
      aria-label="Opções do menu"
    >
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