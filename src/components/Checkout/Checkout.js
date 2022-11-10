import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';

import CheckoutForm from './CheckoutForm';

const Checkout = () => {
  const { cart } = useContext(CartContext);

  // Redirigir al usuario a la página principal si el carrito está vacio
  return cart.length > 0 ? (
    <CheckoutForm />
  ) : (
    <Navigate to='/' replace={true} />
  );
};

export default Checkout;
