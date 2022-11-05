import { useState, useEffect, createContext } from 'react';
import { useLocation } from 'react-router-dom';

export const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Funcion que cambia el estado del menú de abierto a cerrado y viceversa
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
