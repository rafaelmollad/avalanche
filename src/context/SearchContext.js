import { useState, useEffect, createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { MenuContext } from './MenuContext';

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isMenuOpen } = useContext(MenuContext);
  const { pathname, search } = useLocation();

  useEffect(() => {
    setIsSearchOpen(false);
  }, [pathname, search]);

  if (isSearchOpen && isMenuOpen) {
    return setIsSearchOpen(false);
  }

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
