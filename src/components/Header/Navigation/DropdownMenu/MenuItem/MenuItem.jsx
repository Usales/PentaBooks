import React from 'react';
import './MenuItem.css';

const MenuItem = ({ id, label, onItemClick }) => {
  const handleClick = () => {
    onItemClick(id);
  };

  return (
    <li className="menu-item">
      <button className="menu-item__button" onClick={handleClick}>
        {label}
      </button>
    </li>
  );
};

export default MenuItem; 