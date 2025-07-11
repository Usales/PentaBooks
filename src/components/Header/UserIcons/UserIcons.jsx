import React, { useState, useEffect, useRef } from 'react';
import UserIcon from './UserIcon/UserIcon';
import './UserIcons.css';
import lupa from '../../../imagens/lupa.png';
import perfil from '../../../imagens/perfil.svg';
// import sacola from '../../../imagens/sacola.svg'; // Removido

// Importar dados dos livros para pesquisa
import livroMagoas from '../../../Livros/Livro de Mágoas.jpg';
import oliverTwist from '../../../Livros/Oliver Twist.jpg';
import coracaoCachorro from '../../../Livros/Coração de Cachorro.jpg';
import espiritoLeis from '../../../Livros/O Espírito das Leis.jpg';
import conflitoCriatividade from '../../../Livros/Conflito e Criatividade – do Trauma ao Mistério Existencial.jpg';
import historiaArte from '../../../Livros/História da Arte.jpg';
import herdeirosNietzsche from '../../../Livros/Os Herdeiros de Nietzsche.jpg';
import republica from '../../../Livros/A República.jpg';
import ventoTinhoso from '../../../Livros/O Vento Tinhoso.jpg';
import misterioExpresso from '../../../Livros/Mistério no Expresso Baturité.jpg';
import segredoJoao from '../../../Livros/O Segredo de Joãozinho.jpg';
import poemasInfantis from '../../../Livros/Poemas Infantis.jpg';
import odisseia from '../../../Livros/odisseia.jpg';
import revolucaoBichos from '../../../Livros/A Revolução dos Bichos.jpg';
import alienista from '../../../Livros/O Alienista.jpg';
import metamorfose from '../../../Livros/metamorfose.jpg';
import arteGuerra from '../../../Livros/A Arte da Guerra.jpg';
import politica from '../../../Livros/A Política.jpg';
import leisPlatao from '../../../Livros/As leis - Platão.jpg';
import plataoFedon from '../../../Livros/Platao-Fedon.jpg';
import apologiaSocrates from '../../../Livros/Apologia de Sócrates.jpg';

// Importar PDFs
import livroMagoasPdf from '../../../Livros/Livro de Mágoas.pdf';
import oliverTwistPdf from '../../../Livros/Oliver Twist.pdf';
import coracaoCachorroPdf from '../../../Livros/Coração de Cachorro.pdf';
import espiritoLeisPdf from '../../../Livros/O Espírito das Leis.pdf';
import conflitoCriatividadePdf from '../../../Livros/Conflito e Criatividade – do Trauma ao Mistério Existencial.pdf';
import historiaArtePdf from '../../../Livros/História da Arte.pdf';
import herdeirosNietzschePdf from '../../../Livros/Os Herdeiros de Nietzsche.pdf';
import republicaPdf from '../../../Livros/A República.pdf';
import ventoTinhosoPdf from '../../../Livros/O Vento Tinhoso.pdf';
import misterioExpressoPdf from '../../../Livros/Mistério no Expresso Baturité.pdf';
import poemasInfantisPdf from '../../../Livros/Poemas Infantis.pdf';
import odisseiaPdf from '../../../Livros/odisseia.pdf';
import revolucaoBichosPdf from '../../../Livros/A Revolução dos Bichos.pdf';
import alienistaPdf from '../../../Livros/O Alienista.pdf';
import metamorfosePdf from '../../../Livros/metamorfose.pdf';
import arteGuerraPdf from '../../../Livros/A Arte da Guerra.pdf';
import politicaPdf from '../../../Livros/A Política.PDF';
import leisPlataoPdf from '../../../Livros/As leis - Platão.pdf';
import plataoFedonPdf from '../../../Livros/Platao-Fedon.pdf';
import apologiaSocratesPdf from '../../../Livros/Apologia de Sócrates.pdf';

const todosOsLivros = [
  {
    titulo: "A República",
    autor: "Platão",
    imagem: republica,
    pdf: republicaPdf,
    genero: "Filosofia",
    descricao: "Marco da filosofia política ocidental."
  },
  {
    titulo: "A Política",
    autor: "Aristóteles",
    imagem: politica,
    pdf: politicaPdf,
    genero: "Filosofia",
    descricao: "Estudo clássico sobre estruturas políticas."
  },
  {
    titulo: "As Leis",
    autor: "Platão",
    imagem: leisPlatao,
    pdf: leisPlataoPdf,
    genero: "Filosofia",
    descricao: "Obra tardia sobre legislação ideal."
  },
  {
    titulo: "Fédon",
    autor: "Platão",
    imagem: plataoFedon,
    pdf: plataoFedonPdf,
    genero: "Filosofia",
    descricao: "Reflexão sobre alma e imortalidade."
  },
  {
    titulo: "Apologia de Sócrates",
    autor: "Platão",
    imagem: apologiaSocrates,
    pdf: apologiaSocratesPdf,
    genero: "Filosofia",
    descricao: "Defesa de Sócrates em tribunal ateniense."
  },
  {
    titulo: "Os Herdeiros de Nietzsche",
    autor: "Vários Autores",
    imagem: herdeirosNietzsche,
    pdf: herdeirosNietzschePdf,
    genero: "Filosofia",
    descricao: "Ensaios sobre a influência de Nietzsche."
  },
  {
    titulo: "Odisseia",
    autor: "Homero",
    imagem: odisseia,
    pdf: odisseiaPdf,
    genero: "Filosofia",
    descricao: "Epopeia grega sobre jornada e retornos."
  },
  {
    titulo: "Oliver Twist",
    autor: "Charles Dickens",
    imagem: oliverTwist,
    pdf: oliverTwistPdf,
    genero: "Literatura Clássica",
    descricao: "Retrato da infância e pobreza na Inglaterra."
  },
  {
    titulo: "A Revolução dos Bichos",
    autor: "George Orwell",
    imagem: revolucaoBichos,
    pdf: revolucaoBichosPdf,
    genero: "Literatura Clássica",
    descricao: "Fábula crítica sobre o totalitarismo."
  },
  {
    titulo: "O Alienista",
    autor: "Machado de Assis",
    imagem: alienista,
    pdf: alienistaPdf,
    genero: "Literatura Clássica",
    descricao: "Sátira sobre ciência e loucura."
  },
  {
    titulo: "Metamorfose",
    autor: "Franz Kafka",
    imagem: metamorfose,
    pdf: metamorfosePdf,
    genero: "Literatura Clássica",
    descricao: "Obra-prima do existencialismo"
  },
  {
    titulo: "Conflito e Criatividade",
    autor: "Ricardo Chiaradia",
    imagem: conflitoCriatividade,
    pdf: conflitoCriatividadePdf,
    genero: "Psicologia",
    descricao: "Conflitos gerando criatividade."
  },
  {
    titulo: "Coração de Cachorro",
    autor: "Mikhail Bulgakov",
    imagem: coracaoCachorro,
    pdf: coracaoCachorroPdf,
    genero: "Psicologia",
    descricao: "Sátira sobre ciência e identidade."
  },
  {
    titulo: "Livro de Mágoas",
    autor: "Florbela Espanca",
    imagem: livroMagoas,
    pdf: livroMagoasPdf,
    genero: "Psicologia",
    descricao: "Sonetos sobre dor e saudade."
  },
  {
    titulo: "História da Arte",
    autor: "E. H. Gombrich",
    imagem: historiaArte,
    pdf: historiaArtePdf,
    genero: "Arte",
    descricao: "Panorama acessível da evolução da arte."
  },
  {
    titulo: "O Espírito das Leis",
    autor: "Montesquieu",
    imagem: espiritoLeis,
    pdf: espiritoLeisPdf,
    genero: "Política",
    descricao: "Base da teoria da separação dos poderes."
  },
  {
    titulo: "A Arte da Guerra",
    autor: "Sun Tzu",
    imagem: arteGuerra,
    pdf: arteGuerraPdf,
    genero: "Política",
    descricao: "Estratégias milenares de liderança."
  },
  {
    titulo: "Poemas Infantis",
    autor: "Vários Autores",
    imagem: poemasInfantis,
    pdf: poemasInfantisPdf,
    genero: "Literatura Infantil",
    descricao: "Coletânea lúdica de poesias."
  },
  {
    titulo: "O Segredo de Joãozinho",
    autor: "Autor Desconhecido",
    imagem: segredoJoao,
    pdf: null,
    genero: "Literatura Infantil",
    descricao: "Pequena fábula entrelaçada."
  },
  {
    titulo: "O Vento Tinhoso",
    autor: "Autor Desconhecido",
    imagem: ventoTinhoso,
    pdf: ventoTinhosoPdf,
    genero: "Outros",
    descricao: "Narrativa com tom regional."
  },
  {
    titulo: "Mistério no Expresso Baturité",
    autor: "Autor Desconhecido",
    imagem: misterioExpresso,
    pdf: misterioExpressoPdf,
    genero: "Outros",
    descricao: "Pequeno thriller ambientado no Ceará."
  }
];

const USER_ICONS = [
  { src: lupa, alt: 'Pesquisar' },
  { src: perfil, alt: 'Perfil do usuário' }
];

const UserIcons = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const searchRef = useRef(null);
  const loginRef = useRef(null);

  const handleIconClick = (alt) => {
    if (alt === 'Pesquisar') {
      setShowSearch((prev) => !prev);
      if (!showSearch) {
        setTimeout(() => {
          searchRef.current?.focus();
        }, 100);
      }
    }
    if (alt === 'Perfil do usuário') {
      setShowLogin(true);
    }
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (value.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = todosOsLivros.filter(livro => 
      livro.titulo.toLowerCase().includes(value.toLowerCase()) ||
      livro.autor.toLowerCase().includes(value.toLowerCase()) ||
      livro.genero.toLowerCase().includes(value.toLowerCase()) ||
      livro.descricao.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(results.slice(0, 5)); // Limitar a 5 resultados
  };

  const handleDownload = (livro) => {
    if (livro.pdf) {
      const link = document.createElement('a');
      link.href = livro.pdf;
      link.download = `${livro.titulo} - ${livro.autor}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('PDF não disponível para este livro.');
    }
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSearch(false);
      setSearchTerm('');
      setSearchResults([]);
    }
    if (showLogin && loginRef.current && !loginRef.current.contains(event.target)) {
      setShowLogin(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLogin]);

  return (
    <div className="user-icons">
      {USER_ICONS.map((icon, idx) => {
        if (icon.alt === 'Pesquisar') {
          return (
            <React.Fragment key={idx}>
              {showSearch && (
                <div className="user-icons__search-container" ref={searchRef}>
                  <input
                    type="text"
                    className="user-icons__search-input"
                    placeholder="Digite sua pesquisa..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    autoFocus
                  />
                  {searchResults.length > 0 && (
                    <div className="user-icons__search-results">
                      {searchResults.map((livro, index) => (
                        <div key={index} className="user-icons__search-result">
                          <img 
                            src={livro.imagem} 
                            alt={livro.titulo}
                            className="user-icons__search-result-image"
                          />
                          <div className="user-icons__search-result-content">
                            <h4 className="user-icons__search-result-title">{livro.titulo}</h4>
                            <p className="user-icons__search-result-author">por {livro.autor}</p>
                            <p className="user-icons__search-result-genre">{livro.genero}</p>
                          </div>
                          <button 
                            className="user-icons__search-result-btn"
                            onClick={() => handleDownload(livro)}
                          >
                            {livro.pdf ? 'Baixar' : 'Indisponível'}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
              <UserIcon
                src={icon.src}
                alt={icon.alt}
                onClick={() => handleIconClick(icon.alt)}
              />
            </React.Fragment>
          );
        }
        if (icon.alt === 'Perfil do usuário') {
          return (
            <React.Fragment key={idx}>
              {showLogin && (
                <div className="login-modal-overlay">
                  <div className="login-modal" ref={loginRef}>
                    <button className="login-modal__close" onClick={() => setShowLogin(false)}>×</button>
                    <h2>Login</h2>
                    <p className="login-modal__admin-msg">Esta área é apenas para o administrador.</p>
                    <form className="login-modal__form" onSubmit={e => { e.preventDefault(); setShowLogin(false); }}>
                      <input type="text" className="login-modal__input" placeholder="E-mail ou usuário" required />
                      <input type="password" className="login-modal__input" placeholder="Senha" required />
                      <button type="submit" className="login-modal__btn">Entrar</button>
                    </form>
                  </div>
                </div>
              )}
              <UserIcon
                src={icon.src}
                alt={icon.alt}
                onClick={() => handleIconClick(icon.alt)}
              />
            </React.Fragment>
          );
        }
        return (
          <UserIcon
            key={idx}
            src={icon.src}
            alt={icon.alt}
            onClick={() => handleIconClick(icon.alt)}
          />
        );
      })}
    </div>
  );
};

export default UserIcons; 