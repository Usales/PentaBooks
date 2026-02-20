import React from 'react';
import './MenuItem.css';

const MenuItem = ({ id, label, onItemClick }) => {
  const handleClick = () => {
    onItemClick(id);
  };

  return (
    <li className="menu-item" role="none">
      <button
        type="button"
        className="menu-item__button"
        onClick={handleClick}
        role="menuitem"
      >
        {label}
      </button>
    </li>
  );
};

export default MenuItem; 