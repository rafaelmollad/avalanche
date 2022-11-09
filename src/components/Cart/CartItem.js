import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { formatPrice } from '../../utils/helpers';

const CartItem = ({ item }) => {
  const { getItemTotal, removeItem } = useContext(CartContext);
  const { id, imgUrl, title, quantity } = item;

  return (
    <div key={id} className='cart__item cart-item'>
      <div className='cart-item__image-container'>
        <Link to={`/item/${id}`}>
          <img src={imgUrl} alt={title} className='cart-item__image' />
        </Link>
      </div>
      <div className='cart-item__info-container'>
        <div className='cart-item__title-container'>
          <Link to={`/item/${id}`}>
            <h2 className='cart-item__title'>{`${title} x ${quantity}`}</h2>
          </Link>
          <button
            className='cart-item__delete-item'
            onClick={() => removeItem(id)}
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
};

export default CartItem;
