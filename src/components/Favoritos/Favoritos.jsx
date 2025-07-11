import React from 'react';
import './Favoritos.css';

const Favoritos = ({ isVisible, onClose, favoritos, toggleFavorito }) => {
  if (!isVisible) return null;

  return (
    <div className="favoritos-modal-overlay" onClick={onClose}>
      <div className="favoritos-modal" onClick={e => e.stopPropagation()}>
        <button className="favoritos-close" onClick={onClose}>×</button>
        <h2>Favoritos</h2>
        {favoritos.length === 0 ? (
          <p>Nenhum livro favoritado ainda.</p>
        ) : (
          <div className="favoritos-list">
            {favoritos.map((livro, idx) => (
              <div className="favoritos-card" key={idx}>
                <button className="star-btn" onClick={() => toggleFavorito(livro)} title="Remover dos favoritos">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </button>
                <img src={livro.imagem} alt={livro.titulo} className="favoritos-card-img" />
                <div className="favoritos-card-info">
                  <h4>{livro.titulo}</h4>
                  <p>{livro.autor}</p>
                  <p className="favoritos-card-genero">{livro.genero}</p>
                  <a href={livro.pdf} download className="favoritos-card-download" target="_blank" rel="noopener noreferrer">Baixar PDF</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favoritos; 