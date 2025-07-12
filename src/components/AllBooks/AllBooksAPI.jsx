import React, { useState, useEffect, useRef } from 'react';
import { getLivros, buscarLivrosPorTitulo, buscarLivrosPorAutor } from '../../servicos/livros';
import './AllBooks.css';

const AllBooksAPI = ({ isVisible, onClose, favoritos = [], toggleFavorito }) => {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [generoFiltro, setGeneroFiltro] = useState('Todos');
  const [busca, setBusca] = useState('');
  const [tipoBusca, setTipoBusca] = useState('titulo'); // 'titulo' ou 'autor'
  const sectionRef = useRef(null);

  // Carregar livros iniciais
  useEffect(() => {
    const carregarLivros = async () => {
      try {
        setLoading(true);
        const livrosData = await getLivros();
        setLivros(livrosData);
        setError(null);
      } catch (err) {
        setError('Erro ao carregar livros');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (isVisible) {
      carregarLivros();
    }
  }, [isVisible]);

  // Função para buscar livros
  const handleBusca = async () => {
    if (!busca.trim()) {
      // Se não há busca, carrega livros padrão
      const livrosData = await getLivros();
      setLivros(livrosData);
      return;
    }

    try {
      setLoading(true);
      let livrosData;
      
      if (tipoBusca === 'titulo') {
        livrosData = await buscarLivrosPorTitulo(busca);
      } else {
        livrosData = await buscarLivrosPorAutor(busca);
      }
      
      setLivros(livrosData);
      setError(null);
    } catch (err) {
      setError('Erro ao buscar livros');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Função para obter imagem do livro
  const getImagemLivro = (livro) => {
    if (livro.cover_i) {
      return `https://covers.openlibrary.org/b/id/${livro.cover_i}-L.jpg`;
    }
    // Imagem padrão se não houver capa
    return 'https://via.placeholder.com/300x400?text=Sem+Capa';
  };

  // Função para obter autores formatados
  const getAutores = (livro) => {
    if (livro.author_name && livro.author_name.length > 0) {
      return livro.author_name.join(', ');
    }
    return 'Autor desconhecido';
  };

  // Função para obter gênero (usando subjects como aproximação)
  const getGenero = (livro) => {
    if (livro.subject && livro.subject.length > 0) {
      // Pega o primeiro subject como gênero
      return livro.subject[0];
    }
    return 'Geral';
  };

  // Função para obter descrição
  const getDescricao = (livro) => {
    if (livro.first_sentence && livro.first_sentence.length > 0) {
      return livro.first_sentence[0];
    }
    return 'Descrição não disponível';
  };

  // Filtrar livros por gênero
  const livrosFiltrados = generoFiltro === 'Todos' 
    ? livros 
    : livros.filter(livro => getGenero(livro) === generoFiltro);

  // Agrupar livros por gênero
  const livrosPorGenero = {};
  livrosFiltrados.forEach(livro => {
    const genero = getGenero(livro);
    if (!livrosPorGenero[genero]) {
      livrosPorGenero[genero] = [];
    }
    livrosPorGenero[genero].push(livro);
  });

  // Obter lista de gêneros únicos
  const generos = [...new Set(livros.map(livro => getGenero(livro)))];

  if (!isVisible) return null;

  return (
    <section className="all-books" ref={sectionRef}>
      <div className="all-books__container">
        <div className="all-books__header">
          <h1 className="all-books__title">Biblioteca Digital</h1>
          <button className="all-books__close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Barra de busca */}
        <div className="all-books__search">
          <div className="search-container">
            <select 
              value={tipoBusca} 
              onChange={(e) => setTipoBusca(e.target.value)}
              className="search-type-select"
            >
              <option value="titulo">Buscar por título</option>
              <option value="autor">Buscar por autor</option>
            </select>
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder={`Digite o ${tipoBusca === 'titulo' ? 'título' : 'autor'} do livro...`}
              className="search-input"
              onKeyPress={(e) => e.key === 'Enter' && handleBusca()}
            />
            <button onClick={handleBusca} className="search-btn">
              Buscar
            </button>
          </div>
        </div>

        {/* Filtro por gênero */}
        <div className="all-books__filter">
          <select 
            value={generoFiltro} 
            onChange={(e) => setGeneroFiltro(e.target.value)}
            className="all-books__select"
          >
            <option value="Todos">Todas as Categorias</option>
            {generos.map(genero => (
              <option key={genero} value={genero}>{genero}</option>
            ))}
          </select>
        </div>

        {/* Loading e Error states */}
        {loading && (
          <div className="loading">
            <p>Carregando livros...</p>
          </div>
        )}

        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}

        {/* Livros organizados por categoria */}
        {!loading && !error && (
          <div className="all-books__content">
            {Object.entries(livrosPorGenero).map(([genero, livrosGenero]) => (
              <div key={genero} className="all-books__category">
                <h2 className="all-books__category-title">{genero}</h2>
                <div className="all-books__grid">
                  {livrosGenero.map((livro, index) => {
                    const livroFormatado = {
                      titulo: livro.title || 'Título não disponível',
                      autor: getAutores(livro),
                      imagem: getImagemLivro(livro),
                      genero: getGenero(livro),
                      descricao: getDescricao(livro),
                      key: livro.key || index
                    };

                    const favoritado = favoritos.some(fav => 
                      fav.titulo === livroFormatado.titulo && fav.autor === livroFormatado.autor
                    );

                    return (
                      <div key={livroFormatado.key} className="book-card">
                        <button 
                          className="star-btn"
                          onClick={() => toggleFavorito(livroFormatado)}
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
                            src={livroFormatado.imagem}
                            alt={livroFormatado.titulo}
                            className="book-card__image"
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/300x400?text=Sem+Capa';
                            }}
                          />
                          <div className="book-card__overlay">
                            <button 
                              className="book-card__btn"
                              onClick={() => window.open(`https://openlibrary.org${livro.key}`, '_blank')}
                            >
                              Ver na Open Library
                            </button>
                          </div>
                        </div>
                        <div className="book-card__content">
                          <h3 className="book-card__title">{livroFormatado.titulo}</h3>
                          <p className="book-card__author">por {livroFormatado.autor}</p>
                          <p className="book-card__description">{livroFormatado.descricao}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllBooksAPI; 