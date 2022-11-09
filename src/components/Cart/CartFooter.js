import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';
import { formatPrice } from '../../utils/helpers';

const CartFooter = () => {
  const { getTotal } = useContext(CartContext);

  return (
    <div className='cart__footer cart-footer'>
      <div className='cart-footer__total-container'>
        <span className='cart-footer__total-title'>Total</span>
        <span className='cart-footer__total'>{formatPrice(getTotal())}</span>
      </div>
      <Link to='/checkout'>
        <button className='cart-footer__btn'>Finalizar compra</button>
      </Link>
    </div>
  );
};

export default CartFooter;
