import React from 'react';

import Contador from './Contador';
import Accordion from './Accordion';

const ItemDetail = ({
  title,
  description,
  price,
  imgUrl,
  sku,
  stock,
  onAdd,
}) => {
  return (
    <div className='item-detail'>
      <div className='item-detail__image-container'>
        <img className='item-detail__image' src={imgUrl} alt={title} />
      </div>
      <div className='item-detail__info detail-info'>
        <div className='detail-info__wrapper'>
          <h2 className='item-detail__title'>{title}</h2>
          <p className='item-detail__price'>{`$${price}`}</p>
          <p className='item-detail__description'>{description}</p>
          <p className='item-detail__sku'>{`SKU: ${sku}`}</p>
          <Contador stock={stock} onAdd={onAdd} />
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
