import React from 'react';

const Item = ({ title, price, imgUrl }) => {
  return (
    <>
      <img src={imgUrl} alt={title} className='item__image' />
      <div>
        <span className='item__name'>{title}</span>
        <br />
        <span className='item__price'>{`$${price}`}</span>
      </div>
    </>
  );
};

// Esta línea es necesaria para que el SwiperSlide no aparezca despues del SwipperWrapper
Item.displayName = 'SwiperSlide';

export default Item;
