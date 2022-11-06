import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { CartContext } from '../../context/CartContext';

import { formatPrice } from '../../utils/helpers';

const Cart = () => {
  const { cart, getItemTotal, getTotal, closeCart, isCartOpen, removeItem } =
    useContext(CartContext);

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
        <div className='cart__header cart-header'>
          <h2 className='cart-header__title'>Carrito</h2>
          <button onClick={() => closeCart()}>
            <XMarkIcon className='cart-header__close-icon' />
          </button>
        </div>

        {/* Cart body */}
        {/* Mostrar el cart body y el cart body sólo si hay productos en el carrito, sino mostrar un mensaje */}
        {cart.length > 0 ? (
          <>
            <div className='cart__body'>
              {cart.map((item) => {
                return (
                  <div key={item.id} className='cart__item cart-item'>
                    <div className='cart-item__image-container'>
                      <Link to={`/item/${item.id}`}>
                        <img
                          src={item.imgUrl}
                          alt={item.title}
                          className='cart-item__image'
                        />
                      </Link>
                    </div>
                    <div className='cart-item__info-container'>
                      <div className='cart-item__title-container'>
                        <Link to={`/item/${item.id}`}>
                          <h2 className='cart-item__title'>
                            {`${item.title} x ${item.quantity}`}
                          </h2>
                        </Link>
                        <button
                          className='cart-item__delete-item'
                          onClick={() => removeItem(item.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                      <div className='cart-item__subtotal-container'>
                        <span className='cart-item__item-total'>
                          {formatPrice(getItemTotal(item.id))}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* cart footer */}
            <div className='cart__footer cart-footer'>
              <div className='cart-footer__total-container'>
                <span className='cart-footer__total-title'>Total</span>
                <span className='cart-footer__total'>
                  {formatPrice(getTotal())}
                </span>
              </div>
              <button className='cart-footer__btn'>Finalizar compra</button>
            </div>
          </>
        ) : (
          <p className='cart__empty-text'>No hay productos en el carrito</p>
        )}
      </div>
    </>
  );
};

export default Cart;
