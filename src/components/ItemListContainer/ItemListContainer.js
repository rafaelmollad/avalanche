import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { query, where } from 'firebase/firestore';
import { productsRef } from '../../services/fbConfig';
import { getItems } from '../../utils/helpers';

import ItemList from './ItemList/ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Traer todos los productos donde la categoría (id) se encuentre en el array categories
    const q = query(productsRef, where('categories', 'array-contains', id));

    // Request para traer los productos...
    getItems(q)
      .then((items) => setItems(items))
      .catch((e) => {
        console.log(e);
      });

    // Cleanup function
    return () => {
      // Vaciar catálogo
      setItems([]);
    };
  }, [id]);

  return (
    <div className='list-container'>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
