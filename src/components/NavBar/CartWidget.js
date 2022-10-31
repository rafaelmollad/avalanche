import { ShoppingBagIcon } from '@heroicons/react/24/outline';

const CartWidget = ({ cartCount }) => {
  // Cambiar el fontSize de la notificación de acuerdo al número de dígitos del número
  const cartCountLength = cartCount.toString().length;
  const widgetNotificationStyles =
    cartCountLength === 1 ? { fontSize: 12 } : { fontSize: 10 };

  return (
    <span className='cart-widget'>
      {/* Sólo mostrar la notificación si hay algún producto en el carrito */}
      {cartCount !== 0 && (
        <span
          className='cart-widget__notification'
          style={widgetNotificationStyles}
        >
          {cartCount}
        </span>
      )}
      <ShoppingBagIcon className='navbar-icon' />
    </span>
  );
};

export default CartWidget;
