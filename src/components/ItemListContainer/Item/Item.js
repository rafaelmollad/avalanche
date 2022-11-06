import React from 'react';
import { Link } from 'react-router-dom';

import { formatPrice } from '../../../utils/helpers';

const Item = ({ id, title, price, imgUrl }) => {
  return (
    <div>
      <Link to={`/item/${id}`}>
        <img src={imgUrl} alt={title} className='item__image' />
        <div>
          <span className='item__title'>{title}</span>
          <br />
          <span className='item__price'>{formatPrice(price)}</span>
        </div>
      </Link>
    </div>
  );
};

// Esta línea es necesaria para que el SwiperSlide no aparezca despues del SwipperWrapper
Item.displayName = 'SwiperSlide';

export default Item;
