import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import ItemList from './ItemList';
import Slider from './Slider';
import { products, getProducts } from '../data';

const ItemListContainer = () => {
  const [catalog, setCatalog] = useState([]);

  const { pathname } = useLocation();

  const { id } = useParams();
  const useParamsValue = useParams();
  console.log(useParamsValue);
  console.log('CATEGORIA:', id);

  // Request para traer el catálogo...
  useEffect(() => {
    // Actualizar el state si la promesa fue exitosa o mostrar un error en la consola si algo falló
    getProducts(id)
      .then((response) => setCatalog(response))
      .catch((e) => console.log(e));
  }, [id]);

  console.log(pathname);

  return (
    <div className='list-container'>
      {/* Mostrar 3 sliders si estamos en la homepage, else mostrar el ItemList*/}
      {pathname === '/' ? (
        <>
          <Slider catalog={catalog} category='hombre' />
          <Slider catalog={catalog} category='mujer' />
          <Slider catalog={catalog} category='denim' />
        </>
      ) : (
        <ItemList catalog={catalog} />
      )}
    </div>
  );
};

export default ItemListContainer;
