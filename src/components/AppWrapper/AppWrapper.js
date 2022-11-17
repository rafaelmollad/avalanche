import React from 'react';

import App from '../../App';

import MenuProvider from '../../context/MenuContext';
import SearchProvider from '../../context/SearchContext';
import CartProvider from '../../context/CartContext';

// Tuve que agregar este componente para que App pueda tener acceso al contexto, porque sino mi carrito se iba a mostrar siempre
const AppWrapper = () => {
  return (
    <CartProvider>
      <MenuProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </MenuProvider>
    </CartProvider>
  );
};

export default AppWrapper;
