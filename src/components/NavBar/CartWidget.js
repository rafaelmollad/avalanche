import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import { ShoppingBagIcon } from '@heroicons/react/24/outline';

const CartWidget = () => {
  const { getTotalQuantity, toggleCart } = useContext(CartContext);

  // Cambiar el fontSize de la notificación de acuerdo al número de dígitos de la cantidad
  const quantity = getTotalQuantity();
  const quantityLength = quantity.toString().length;
  const widgetNotificationStyles =
    quantityLength === 1 ? { fontSize: 12 } : { fontSize: 10 };

  return (
    <span className='cart-widget' onClick={() => toggleCart()}>
      {/* Sólo mostrar la notificación si hay algún producto en el carrito */}
      {quantity > 0 && (
        <span
          className='cart-widget__notification'
          style={widgetNotificationStyles}
        >
          {quantity}
        </span>
      )}
      <ShoppingBagIcon className='navbar-icon' />
    </span>
  );
};

export default CartWidget;
