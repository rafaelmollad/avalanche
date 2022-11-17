import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getItem } from '../../utils/helpers';
import NotFound from '../NotFound/NotFound';
import ItemDetail from './ItemDetail/ItemDetail';
import ItemDetailSkeleton from './ItemDetail/ItemDetailSkeleton';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const id = useParams().id;

  useEffect(() => {
    // Request para traer un item
    getItem(id)
      .then((item) => {
        // Si el item existe, actualizo el estado del item, sino actualizo el estado de notFound
        item ? setItem(item) : setNotFound(true);
      })
      .catch((e) => console.log(e));

    return () => setItem(null);
  }, [id]);

  // Si el item no se encontró renderizar el componente NotFound
  if (notFound) {
    return <NotFound />;
  }

  return (
    <div className='item-detail-container'>
      {item ? <ItemDetail item={item} /> : <ItemDetailSkeleton />}
    </div>
  );
};

export default ItemDetailContainer;
