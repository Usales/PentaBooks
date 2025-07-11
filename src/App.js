import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import BookSection from './components/BookSection/BookSection';
import Footer from './components/Footer/Footer';
import AllBooks from './components/AllBooks/AllBooks';
import Favoritos from './components/Favoritos/Favoritos';
import './App.css';

function App() {
  const [showAllBooks, setShowAllBooks] = useState(false);
  const [showFavoritos, setShowFavoritos] = useState(false);
  const [favoritos, setFavoritos] = useState(() => {
    const fav = localStorage.getItem('favoritos');
    return fav ? JSON.parse(fav) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  const handleOpenAllBooks = () => {
    setShowAllBooks(true);
  };

  const handleCloseAllBooks = () => {
    setShowAllBooks(false);
  };

  const handleOpenFavoritos = () => {
    setShowFavoritos(true);
  };

  const handleCloseFavoritos = () => {
    setShowFavoritos(false);
  };

  const toggleFavorito = (livro) => {
    setFavoritos((prev) => {
      const exists = prev.find(fav => fav.titulo === livro.titulo && fav.autor === livro.autor);
      if (exists) {
        return prev.filter(fav => !(fav.titulo === livro.titulo && fav.autor === livro.autor));
      } else {
        return [...prev, livro];
      }
    });
  };

  return (
    <div className="App">
      <Header onOpenAllBooks={handleOpenAllBooks} onOpenFavoritos={handleOpenFavoritos} />
      <Hero />
      <BookSection favoritos={favoritos} toggleFavorito={toggleFavorito} />
      <Footer />
      <AllBooks isVisible={showAllBooks} onClose={handleCloseAllBooks} favoritos={favoritos} toggleFavorito={toggleFavorito} />
      <Favoritos isVisible={showFavoritos} onClose={handleCloseFavoritos} favoritos={favoritos} toggleFavorito={toggleFavorito} />
    </div>
  );
}

export default App;
