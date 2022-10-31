import React from 'react';

const ItemSkeleton = () => {
  return (
    <div className='item-skeleton'>
      <div className='item__image skeleton item-skeleton__image'></div>
      <div>
        <div className='item__name skeleton item-skeleton__title'></div>
        <div className='item__price skeleton item-skeleton__price'></div>
      </div>
    </div>
  );
};

export default ItemSkeleton;
