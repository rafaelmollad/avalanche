import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import SearchResults from './components/SearchResults/SearchResults';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const { pathname, search } = useLocation();

  // Cerrar el menú y la barra de búsqueda cuando la ruta o el query string cambian.
  // Mover la página al comienzo (0, 0)
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    window.scrollTo(0, 0);
  }, [pathname, search]);

  // Oculta el scrollbar cuando el menú está abierto en dispositivos móviles.
  document.body.style.overflowY = isMenuOpen ? 'hidden' : 'unset';

  const handleIsMenuOpen = () => {
    // Cerrar la barra de búsqueda cuando se hace click en el menú.
    if (isSearchOpen) {
      setIsSearchOpen(false);
    }

    setIsMenuOpen(!isMenuOpen);
  };

  const handleIsSearchOpen = () => {
    // No permitir que se la barra de búsqueda, si está abierto el menú.
    if (isMenuOpen) return;

    setIsSearchOpen(!isSearchOpen);
  };

  // Esta función se ejecuta cuando se hace click en el botón agregar al carrito en el ItemDetail
  const onAdd = (quantity) => {
    setCartCount(cartCount + quantity);
  };

  return (
    <div className='App'>
      {/* Mostrar el header y el hero si estamos en la homepage o sólo el header si estamos en cualquier otra página */}
      {pathname === '/' ? (
        <div className='wrapper'>
          <Header
            isMenuOpen={isMenuOpen}
            isSearchOpen={isSearchOpen}
            handleIsMenuOpen={handleIsMenuOpen}
            handleIsSearchOpen={handleIsSearchOpen}
            cartCount={cartCount}
          />
          <Hero />
        </div>
      ) : (
        <Header
          isMenuOpen={isMenuOpen}
          isSearchOpen={isSearchOpen}
          handleIsMenuOpen={handleIsMenuOpen}
          handleIsSearchOpen={handleIsSearchOpen}
          cartCount={cartCount}
        />
      )}

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:id' element={<ItemListContainer />} />
        <Route
          path='/item/:id'
          element={<ItemDetailContainer onAdd={onAdd} />}
        />
        <Route path='/search' element={<SearchResults />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
