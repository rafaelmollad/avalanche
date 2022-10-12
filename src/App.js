import { useState } from 'react';

import NavBar from './components/NavBar/NavBar';
import MenuMobile from './components/MenuMobile/MenuMobile';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import SearchBar from './components/SearchBar/SearchBar';
import Hero from './components/Hero/Hero';

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  // Oculta el scrollbar cuando el menú está abierto en dispositivos móviles.
  document.body.style.overflowY = isMenuOpen ? 'hidden' : 'unset';

  const handleIsMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleIsSearchOpen = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <div className='App'>
      <div className='wrapper'>
        <NavBar
          isMenuOpen={isMenuOpen}
          handleIsMenuOpen={handleIsMenuOpen}
          handleIsSearchOpen={handleIsSearchOpen}
        />
        <Hero />
      </div>

      {isSearchOpen && <SearchBar />}
      {isMenuOpen && <MenuMobile />}

      <ItemListContainer greeting='¡Bienvenido a Avalanche!' />
    </div>
  );
};

export default App;
