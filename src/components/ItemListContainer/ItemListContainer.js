import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { query, where } from 'firebase/firestore';
import { productsRef } from '../../services/fbConfig';
import { getItems } from '../../utils/helpers';

import ItemList from './ItemList/ItemList';
import NotFound from '../NotFound/NotFound';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const q = query(productsRef, where('categories', 'array-contains', id));

    getItems(q)
      .then((items) => {
        items.length ? setItems(items) : setNotFound(true);
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {
      setItems([]);
      setNotFound(false);
    };
  }, [id]);

  if (notFound) {
    return <NotFound />;
  }

  return (
    <div className='list-container'>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
