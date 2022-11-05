import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getItem } from '../../utils/mock';
import ItemDetail from './ItemDetail/ItemDetail';
import ItemDetailSkeleton from './ItemDetail/ItemDetailSkeleton';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const id = Number(useParams().id);

  // Request para traer un item
  useEffect(() => {
    // Actualizar el state si la promesa fue exitosa o mostrar un error en la consola si algo falló
    getItem(id)
      .then((response) => {
        setItem(response);
      })
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div className='item-detail-container'>
      {item ? <ItemDetail item={item} /> : <ItemDetailSkeleton />}
    </div>
  );
};

export default ItemDetailContainer;
