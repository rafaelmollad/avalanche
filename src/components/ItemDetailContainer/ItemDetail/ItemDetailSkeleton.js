import React from 'react';

const ItemDetailSkeleton = () => {
  return (
    <div className='item-detail item-detail-skeleton'>
      <div className='item-detail-skeleton__image-container skeleton'></div>
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
