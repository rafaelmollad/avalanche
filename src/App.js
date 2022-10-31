import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const { pathname } = useLocation();

  // Cerrar el menú cuando se cambia de ruta y hacer un scroll hacia la parte superior de la página
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  // Oculta el scrollbar cuando el menú está abierto en dispositivos móviles.
  document.body.style.overflowY = isMenuOpen ? 'hidden' : 'unset';

  const handleIsMenuOpen = () => {
    // Cerrar la barra de búsqueda cuando se hace click en el menú.
    if (isSearchOpen) {
      setSearchOpen(false);
    }

    setMenuOpen(!isMenuOpen);
  };

  const handleIsSearchOpen = () => {
    // No permitir que se la barra de búsqueda, si está abierto el menú.
    if (isMenuOpen) return;

    setSearchOpen(!isSearchOpen);
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
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
