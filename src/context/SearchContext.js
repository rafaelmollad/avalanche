import { useState, useEffect, createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { MenuContext } from './MenuContext';

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isMenuOpen } = useContext(MenuContext);
  const { pathname, search } = useLocation();

  // Cerrar la barra de búsqueda cuando cambia el pathname o el search query
  useEffect(() => {
    setIsSearchOpen(false);
  }, [pathname, search]);

  // Cerrar la barra de búsqueda si el menú está abierto.
  if (isSearchOpen && isMenuOpen) {
    return setIsSearchOpen(false);
  }

  // Funcion que cambia el estado de la barra de búsqueda de abierto a cerrado y viceversa
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <SearchContext.Provider value={{ isSearchOpen, toggleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
