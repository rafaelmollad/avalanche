// Import Swiper React components
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

import ProductItem from './ProductItem';

const ProductList = ({ category }) => {
  return (
    <section className='product-list'>
      <div className='product-list__header'>
        <h2 className='product-list__category'>{category}</h2>
        <a href='#' className='product-list__link'>
          Ver Todo
        </a>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={5}
        className='mySwiper'
        pagination={{
          type: 'progressbar',
        }}
        modules={[Pagination]}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </Swiper>
    </section>
  );
};

export default ProductList;
