import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import ItemList from './ItemList/ItemList';
import Slider from '../Slider/Slider';
import { getProducts } from '../../utils/mock';

const ItemListContainer = () => {
  const [catalog, setCatalog] = useState([]);

  const { pathname } = useLocation();
  const { id } = useParams();

  // Request para traer el catálogo...
  useEffect(() => {
    // Actualizar el state si la promesa fue exitosa o mostrar un error en la consola si algo falló
    getProducts(id)
      .then((response) => {
        setCatalog(response);
      })
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div className='list-container'>
      {/* Mostrar 3 sliders si estamos en la página de inicio o el itemList si estamos en cualquier otra página */}
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
