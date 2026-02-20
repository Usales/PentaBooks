import React from 'react';
import './Hero.css';
import fotoAutor from '../../imagens/Foto.jpeg';

/** Hero: título, copy, CTA para #nossa-biblioteca */

const comentarios = [
  { text: 'Qual seu livro favorito?', className: 'balao balao-top-left' },
  { text: 'Já leu hoje?', className: 'balao balao-top-right' },
  { text: 'Compartilhe conhecimento!', className: 'balao balao-bottom-left' },
  { text: 'Dica de leitura?', className: 'balao balao-bottom-right' },
];

const Hero = () => (
  <section className="hero">
    <div className="hero__content">
      <h1 className="hero__title">
        Bem-vindo ao <span className="hero__brand">Penta</span>Books
      </h1>
      <p className="hero__subtitle">
        Encontre clássicos, filosofia e literatura em um só lugar. Organize, leia e baixe em PDF — sem enrolação.
      </p>
      <a href="#nossa-biblioteca" className="hero__cta">
        Explorar Biblioteca
      </a>
    </div>
    <div className="hero__image-container">
      <div className="hero__photo-wrapper">
        <img
          src={fotoAutor}
          alt="Foto do autor"
          className="hero__image hero__author-photo"
        />
        <div className="hero__tooltip">
          <p className="hero__tooltip-message">Não encare demais, você vai ficar tonto!</p>
          <div className="hero__social-links">
            <a 
              href="https://github.com/Usales" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero__social-link"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/gabriel-henriques-sales-43953b218/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero__social-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
        {/* Balões de comentários flutuantes */}
        {comentarios.map((coment, idx) => (
          <div key={idx} className={coment.className}>
            {coment.text}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero; 