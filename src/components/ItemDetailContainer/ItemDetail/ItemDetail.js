import React, { useContext } from 'react';

import Contador from '../../Contador/Contador';
import Accordion from '../../Accordion/Accordion';

import { CartContext } from '../../../context/CartContext';

import { formatPrice, formatString } from '../../../utils/helpers';

const ItemDetail = ({ item }) => {
  const { addToCart, getItemQuantity, isItemInCart } = useContext(CartContext);

  const onAdd = (quantity) => {
    addToCart(item, quantity);
  };

  const { id, title, description, price, imgUrl, sku, stock } = item;

  return (
    <div className='item-detail'>
      <div className='item-detail__image-container'>
        <img className='item-detail__image' src={imgUrl} alt={title} />
      </div>
      <div className='item-detail__info detail-info'>
        <div className='detail-info__wrapper'>
          <h2 className='item-detail__title'>{title}</h2>
          <p className='item-detail__price'>{formatPrice(price)}</p>
          <p className='item-detail__description'>
            {formatString(description)}
          </p>
          <p className='item-detail__sku'>{`SKU: ${sku}`}</p>
          <Contador
            stock={stock}
            onAdd={onAdd}
            initialQuantity={getItemQuantity(id)}
            isItemInCart={isItemInCart(id)}
          />
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
