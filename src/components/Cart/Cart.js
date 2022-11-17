import React, { useEffect, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import CartHeader from './CartHeader';
import CartBody from './CartBody';
import CartFooter from './CartFooter';

const Cart = () => {
  const { cart, closeCart, isCartOpen } = useContext(CartContext);

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'visible';
    };
  }, []);

  return (
    <>
      {/* Cart overlay */}
      <div
        className={isCartOpen ? 'cart-overlay' : null}
        onClick={() => closeCart()}
      ></div>

      {/* Cart */}
      <div className={`cart ${isCartOpen ? 'cart--open' : ''}`}>
        {/* Cart header */}
        <CartHeader />

        {/* Cart body */}
        {/* Mostrar el cart body y el cart footer sólo si hay productos en el carrito, sino mostrar un mensaje */}
        {cart.length > 0 ? (
          <>
            <CartBody cart={cart} />
            <CartFooter />
          </>
        ) : (
          <p className='cart__empty-text'>No hay productos en el carrito</p>
        )}
      </div>
    </>
  );
};

export default Cart;
