import React from 'react';

import CartItem from './CartItem';

const CartBody = ({ cart }) => {
  return (
    <div className='cart__body'>
      {cart.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default CartBody;
