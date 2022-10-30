import React from 'react';

import product from '../assets/product.jpg';

const ItemDetailSkeleton = () => {
  return (
    <div className='item-detail item-detail-skeleton'>
      <div className='item-detail__image-container item-detail-skeleton__image-container skeleton'>
        <img
          src={product}
          alt='placeholder product'
          className='item-detail__image item-detail-skeleton__image'
        />
      </div>
      <div className='item-detail__info detail-info'>
        <div className='detail-info__wrapper'>
          <div className='item-detail__title item-detail-skeleton__title skeleton'></div>
          <div className='item-detail__price item-detail-skeleton__price skeleton'></div>
          <div className='item-detail__description item-detail-skeleton__description skeleton'></div>
          <div className='item-detail__description item-detail-skeleton__description skeleton'></div>
          <div className='item-detail__description item-detail-skeleton__description skeleton'></div>
          <div className='item-detail__description item-detail-skeleton__description skeleton'></div>
          <div className='item-detail__description item-detail-skeleton__description skeleton'></div>
          <div className='item-detail__description item-detail-skeleton__description skeleton'></div>
          <div className='item-detail__description item-detail-skeleton__description skeleton'></div>
          <div className='item-detail__description item-detail-skeleton__description skeleton'></div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailSkeleton;
