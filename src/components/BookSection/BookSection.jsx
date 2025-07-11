import React, { useState, useEffect, useRef } from 'react';
import './BookSection.css';

// Importar imagens dos livros
import livroMagoas from '../../Livros/Livro de Mágoas.jpg';
import oliverTwist from '../../Livros/Oliver Twist.jpg';
import coracaoCachorro from '../../Livros/Coração de Cachorro.jpg';
import espiritoLeis from '../../Livros/O Espírito das Leis.jpg';
import conflitoCriatividade from '../../Livros/Conflito e Criatividade – do Trauma ao Mistério Existencial.jpg';
import historiaArte from '../../Livros/História da Arte.jpg';
import herdeirosNietzsche from '../../Livros/Os Herdeiros de Nietzsche.jpg';
import republica from '../../Livros/A República.jpg';
import ventoTinhoso from '../../Livros/O Vento Tinhoso.jpg';
import misterioExpresso from '../../Livros/Mistério no Expresso Baturité.jpg';
import segredoJoao from '../../Livros/O Segredo de Joãozinho.jpg';
import poemasInfantis from '../../Livros/Poemas Infantis.jpg';
import odisseia from '../../Livros/odisseia.jpg';
import revolucaoBichos from '../../Livros/A Revolução dos Bichos.jpg';
import alienista from '../../Livros/O Alienista.jpg';
import metamorfose from '../../Livros/metamorfose.jpg';
import arteGuerra from '../../Livros/A Arte da Guerra.jpg';
import politica from '../../Livros/A Política.jpg';
import leisPlatao from '../../Livros/As leis - Platão.jpg';
import plataoFedon from '../../Livros/Platao-Fedon.jpg';
import apologiaSocrates from '../../Livros/Apologia de Sócrates.jpg';

// Importar arquivos PDF
import livroMagoasPdf from '../../Livros/Livro de Mágoas.pdf';
import oliverTwistPdf from '../../Livros/Oliver Twist.pdf';
import coracaoCachorroPdf from '../../Livros/Coração de Cachorro.pdf';
import espiritoLeisPdf from '../../Livros/O Espírito das Leis.pdf';
import conflitoCriatividadePdf from '../../Livros/Conflito e Criatividade – do Trauma ao Mistério Existencial.pdf';
import historiaArtePdf from '../../Livros/História da Arte.pdf';
import herdeirosNietzschePdf from '../../Livros/Os Herdeiros de Nietzsche.pdf';
import republicaPdf from '../../Livros/A República.pdf';
import ventoTinhosoPdf from '../../Livros/O Vento Tinhoso.pdf';
import misterioExpressoPdf from '../../Livros/Mistério no Expresso Baturité.pdf';
import poemasInfantisPdf from '../../Livros/Poemas Infantis.pdf';
import odisseiaPdf from '../../Livros/odisseia.pdf';
import revolucaoBichosPdf from '../../Livros/A Revolução dos Bichos.pdf';
import alienistaPdf from '../../Livros/O Alienista.pdf';
import metamorfosePdf from '../../Livros/metamorfose.pdf';
import arteGuerraPdf from '../../Livros/A Arte da Guerra.pdf';
import politicaPdf from '../../Livros/A Política.PDF';
import leisPlataoPdf from '../../Livros/As leis - Platão.pdf';
import plataoFedonPdf from '../../Livros/Platao-Fedon.pdf';
import apologiaSocratesPdf from '../../Livros/Apologia de Sócrates.pdf';

const livrosPorGenero = {
  filosofia: {
    titulo: "Filosofia",
    livros: [
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
      }
    ]
  },
  literaturaClassica: {
    titulo: "Literatura Clássica",
    livros: [
      {
        titulo: "Odisseia",
        autor: "Homero",
        imagem: odisseia,
        pdf: odisseiaPdf,
        genero: "Literatura Clássica",
        descricao: "Epopeia sobre a jornada de Ulisses"
      },
      {
        titulo: "Oliver Twist",
        autor: "Charles Dickens",
        imagem: oliverTwist,
        pdf: oliverTwistPdf,
        genero: "Literatura Clássica",
        descricao: "Clássico da literatura inglesa"
      },
      {
        titulo: "A Revolução dos Bichos",
        autor: "George Orwell",
        imagem: revolucaoBichos,
        pdf: revolucaoBichosPdf,
        genero: "Literatura Clássica",
        descricao: "Alegoria política sobre totalitarismo"
      },
      {
        titulo: "O Alienista",
        autor: "Machado de Assis",
        imagem: alienista,
        pdf: alienistaPdf,
        genero: "Literatura Clássica",
        descricao: "Novela sobre loucura e ciência"
      },
      {
        titulo: "Metamorfose",
        autor: "Franz Kafka",
        imagem: metamorfose,
        pdf: metamorfosePdf,
        genero: "Literatura Clássica",
        descricao: "Obra-prima do existencialismo"
      }
    ]
  },
  psicologia: {
    titulo: "Psicologia",
    livros: [
      {
        titulo: "Conflito e Criatividade",
        autor: "Ricardo Chiaradia",
        imagem: conflitoCriatividade,
        pdf: conflitoCriatividadePdf,
        genero: "Psicologia",
        descricao: "Conflitos gerando criatividade."
      },
      {
        titulo: "Metamorfose",
        autor: "Franz Kafka",
        imagem: metamorfose,
        pdf: metamorfosePdf,
        genero: "Psicologia",
        descricao: "Transformação absurda e angústia existencial."
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
      }
    ]
  },
  arte: {
    titulo: "Arte",
    livros: [
      {
        titulo: "História da Arte",
        autor: "E. H. Gombrich",
        imagem: historiaArte,
        pdf: historiaArtePdf,
        genero: "Arte",
        descricao: "Panorama acessível da evolução da arte."
      }
    ]
  },
  politica: {
    titulo: "Política",
    livros: [
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
      }
    ]
  },
  literaturaInfantil: {
    titulo: "Literatura Infantil",
    livros: [
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
        pdf: null, // PDF não disponível
        genero: "Literatura Infantil",
        descricao: "Pequena fábula entrelaçada."
      }
    ]
  },
  outros: {
    titulo: "Outros",
    livros: [
      {
        titulo: "Livro de Mágoas",
        autor: "Autor Desconhecido",
        imagem: livroMagoas,
        pdf: livroMagoasPdf,
        genero: "Outros",
        descricao: "Reflexões sobre mágoas"
      },
      {
        titulo: "Coração de Cachorro",
        autor: "Mikhail Bulgakov",
        imagem: coracaoCachorro,
        pdf: coracaoCachorroPdf,
        genero: "Outros",
        descricao: "Sátira política soviética"
      },
      {
        titulo: "O Vento Tinhoso",
        autor: "Autor Desconhecido",
        imagem: ventoTinhoso,
        pdf: ventoTinhosoPdf,
        genero: "Outros",
        descricao: "História regional"
      },
      {
        titulo: "Mistério no Expresso Baturité",
        autor: "Autor Desconhecido",
        imagem: misterioExpresso,
        pdf: misterioExpressoPdf,
        genero: "Outros",
        descricao: "História de mistério"
      }
    ]
  }
};

const BookSection = ({ favoritos = [], toggleFavorito }) => {
  const [generoAtivo, setGeneroAtivo] = useState('filosofia');
  const [isVisible, setIsVisible] = useState(() => window.innerWidth < 900);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 900) {
      setIsVisible(true);
      return;
    }
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  const handleDownload = (livro) => {
    if (livro.pdf) {
      // Criar um link temporário para download
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

  return (
    <section className="book-section" ref={sectionRef}>
      <div className="book-section__container">
        <h2 className={`book-section__title ${isVisible ? 'animate-in' : ''}`}>
          Nossa Biblioteca
        </h2>
        <p className={`book-section__subtitle ${isVisible ? 'animate-in' : ''}`}>
          Explore nossa coleção organizada por gêneros e autores
        </p>
        
        {/* Navegação por gêneros */}
        <div className={`book-section__nav ${isVisible ? 'animate-in' : ''}`}>
          {Object.keys(livrosPorGenero).map((genero) => (
            <button
              key={genero}
              className={`book-section__nav-btn ${generoAtivo === genero ? 'active' : ''}`}
              onClick={() => setGeneroAtivo(genero)}
            >
              {livrosPorGenero[genero].titulo}
            </button>
          ))}
        </div>

        {/* Grid de livros */}
        <div className={`book-section__grid ${isVisible ? 'animate-in' : ''}`}>
          {livrosPorGenero[generoAtivo].livros.map((livro, index) => {
            const favoritado = favoritos.some(fav => fav.titulo === livro.titulo && fav.autor === livro.autor);
            return (
              <div key={index} className="book-card">
                <button 
                  className="star-btn"
                  onClick={() => toggleFavorito(livro)}
                  title={favoritado ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                >
                  {favoritado ? (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ) : (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  )}
                </button>
                <div className="book-card__image-container">
                  <img
                    src={livro.imagem}
                    alt={livro.titulo}
                    className="book-card__image"
                  />
                  <div className="book-card__overlay">
                    <button 
                      className="book-card__btn"
                      onClick={() => handleDownload(livro)}
                    >
                      {livro.pdf ? 'Baixar PDF' : 'PDF Indisponível'}
                    </button>
                  </div>
                </div>
                <div className="book-card__content">
                  <h3 className="book-card__title">{livro.titulo}</h3>
                  <p className="book-card__author">por {livro.autor}</p>
                  <p className="book-card__description">{livro.descricao}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BookSection; 