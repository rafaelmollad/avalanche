import React, { useState, useEffect } from 'react';
import Slider from '../Slider/Slider';
import { query, where, limit } from 'firebase/firestore';
import { productsRef } from '../../services/fbConfig';
import { getItemsArray } from '../../utils/helpers';

const Featured = () => {
  const [itemsHombre, setItemsHombre] = useState([]);
  const [itemsMujer, setItemsMujer] = useState([]);
  const [itemsDenim, setItemsDenim] = useState([]);

  const getQuery = (category) => {
    return query(
      productsRef,
      where('categories', 'array-contains', category),
      limit(6)
    );
  };

  useEffect(() => {
    getItemsArray([
      getQuery('destacado-hombre'),
      getQuery('destacado-mujer'),
      getQuery('destacado-denim'),
    ])
      .then((itemsArray) => {
        const [itemsHombre, itemsMujer, itemsDenim] = itemsArray;

        setItemsHombre(itemsHombre);
        setItemsMujer(itemsMujer);
        setItemsDenim(itemsDenim);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div style={{ paddingLeft: 40, paddingRight: 40 }}>
      <Slider items={itemsHombre} category='hombre' />
      <Slider items={itemsMujer} category='mujer' />
      <Slider items={itemsDenim} category='denim' />
    </div>
  );
};

export default Featured;
