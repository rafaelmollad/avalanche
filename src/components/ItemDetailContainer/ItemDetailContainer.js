import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getItem } from '../../utils/helpers';
import ItemDetail from './ItemDetail/ItemDetail';
import ItemDetailSkeleton from './ItemDetail/ItemDetailSkeleton';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const id = useParams().id;

  useEffect(() => {
    // Request para traer un item
    getItem(id)
      .then((item) => {
        setItem(item);
      })
      .catch((e) => console.log(e));

    return () => setItem(null);
  }, [id]);

  return (
    <div className='item-detail-container'>
      {item ? <ItemDetail item={item} /> : <ItemDetailSkeleton />}
    </div>
  );
};

export default ItemDetailContainer;
