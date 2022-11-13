// Importar components Swiper para React
import { Swiper, SwiperSlide } from 'swiper/react';

// Importar los estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';

// Importar los módulos que vamos a usar de Swiper
import { Pagination } from 'swiper';

import { Link } from 'react-router-dom';

import Item from '../ItemListContainer/Item/Item';
import ItemSkeleton from '../ItemListContainer/Item/ItemSkeleton';

const Slider = ({ items, category }) => {
  return (
    <div className='slider-list'>
      <div className='slider-list__header'>
        <h2 className='slider-list__category'>{category}</h2>
        <Link to={`category/${category}`} className='slider-list__link'>
          Ver Todo
        </Link>
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
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {/* Mapear los productos filtrados o mostrar un skeleton loading */}
        {items.length > 0
          ? items.map(({ id, title, price, imgUrl }) => (
              <SwiperSlide key={id}>
                <Item id={id} title={title} price={price} imgUrl={imgUrl} />
              </SwiperSlide>
            ))
          : Array(6)
              .fill(<ItemSkeleton />)
              .map((itemSkeleton, index) => (
                <SwiperSlide key={index}>
                  <ItemSkeleton />
                </SwiperSlide>
              ))}
      </Swiper>
    </div>
  );
};

export default Slider;
