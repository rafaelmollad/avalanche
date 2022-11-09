import React, { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { CartContext } from '../../context/CartContext';

const CartHeader = () => {
  const { closeCart } = useContext(CartContext);

  return (
    <div className='cart__header cart-header'>
      <h2 className='cart-header__title'>Carrito</h2>
      <button onClick={() => closeCart()}>
        <XMarkIcon className='cart-header__close-icon' />
      </button>
    </div>
  );
};

export default CartHeader;
