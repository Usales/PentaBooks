import React from 'react';
import './UserIcon.css';

const UserIcon = ({ src, alt, onClick }) => {
  return (
    <button
      className="user-icon"
      onClick={onClick}
      aria-label={alt}
    >
      <img src={src} alt={alt} className="user-icon__image" />
    </button>
  );
};

export default UserIcon; 