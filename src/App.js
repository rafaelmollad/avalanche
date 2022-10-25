import { useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

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

  return (
    <div className='App'>
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

      <ItemListContainer />
      {/* Botón provisorio para testear las notificaciones */}
      {/* <button onClick={() => setCartCount(cartCount + 1)}>Agregar</button> */}
      <Footer />
    </div>
  );
};

export default App;
