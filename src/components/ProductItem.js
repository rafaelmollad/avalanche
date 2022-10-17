import React from 'react';
// Import Swiper React components
import { SwiperSlide } from 'swiper/react';

const ProductItem = ({ name, price, url }) => {
  return (
    <SwiperSlide>
      <img
        src='https://aynotdead.com/wp-content/uploads/2022/09/REMERA-EURYTHMICS-PORTADA.jpg'
        alt='Remera Hombre 1'
        className='product-item__image'
      />
      <div>
        <span className='product-item__name'>THE ORIGINAL TEE W/PATCH</span>
        <br />
        <span className='product-item__price'>$4500</span>
      </div>
    </SwiperSlide>
  );
};

// Esta línea es necesaria para que el SwiperSlide no aparezca despues del SwipperWrapper
ProductItem.displayName = 'SwiperSlide';

export default ProductItem;
