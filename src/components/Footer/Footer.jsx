import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__section">
            <h3 className="footer__title">PentaBooks</h3>
            <p className="footer__description">
              Projeto desenvolvido com o objetivo de praticar minhas habilidades de programação.
            </p>
          </div>
          
          <div className="footer__section">
            <h4 className="footer__subtitle">Links Úteis</h4>
            <ul className="footer__links">
              <li>
                <a 
                  href="https://salesportifolio.netlify.app/" 
                  className="footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfólio
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/Usales" 
                  className="footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/gabriel-henriques-sales-43953b218/" 
                  className="footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer__section">
            <h4 className="footer__subtitle">Contato</h4>
            <ul className="footer__contact">
              <li>Email: GabrielHenriqueslsales1@gmail.com</li>
              <li>WhatsApp: (62) 99522-7774</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 