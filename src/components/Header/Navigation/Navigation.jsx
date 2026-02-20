import React from 'react';
import './Navigation.css';

const Navigation = ({ onOpenAllBooks, onOpenFavoritos }) => {
  return (
    <nav className="navigation" aria-label="Menu principal">
      <div className="navigation__links">
        <button
          type="button"
          className="navigation__link"
          onClick={onOpenAllBooks}
        >
          Todos os livros
        </button>
        <button
          type="button"
          className="navigation__link"
          onClick={onOpenFavoritos}
        >
          Favoritos
        </button>
      </div>
    </nav>
  );
};

export default Navigation; 