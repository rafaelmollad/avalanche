import { useState, useEffect } from 'react';

import ItemList from './ItemList';
import Slider from './Slider';
import { products } from '../data';

const ItemListContainer = () => {
  const [catalog, setCatalog] = useState([]);

  // Request para traer el catálogo...
  useEffect(() => {
    // Crear promise que resuelve despues de 2 segundos
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    // Actualizar el state si la promesa fue exitosa o mostrar un error en la consola si algo falló
    myPromise
      .then((response) => setCatalog(response))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className='list-container'>
      {/* Mostrar 3 sliders si estamos en la homepage, else mostrar el ItemList*/}
      {catalog.length > 0 ? (
        <>
          <Slider catalog={catalog} category='hombre' />
          <Slider catalog={catalog} category='mujer' />
          <Slider catalog={catalog} category='denim' />
        </>
      ) : (
        'Cargando catálogo...'
      )}

      {/* Else */}
      {/* <ItemList catalog={catalog} /> */}
    </div>
  );
};

export default ItemListContainer;
