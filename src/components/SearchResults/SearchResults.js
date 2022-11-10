import React, { useState, useEffect } from 'react';
import ItemList from '../ItemListContainer/ItemList/ItemList';
import { getProducts } from '../../utils/mock';
import { useSearchParams } from 'react-router-dom';
import notFound from '../../assets/not-found.png';

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  // Request para traer el catálogo...
  useEffect(() => {
    // Actualizar el state si la promesa fue exitosa o mostrar un error en la consola si algo falló
    getProducts(undefined, searchQuery)
      .then((response) => {
        setSearchResults(response);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setIsLoading(false);
      });

    // Cleanup function
    return () => {
      // Vaciar catálogo
      setSearchResults([]);
      setIsLoading(true);
    };
  }, [searchQuery]);

  return (
    <div
      className={`search-result ${
        !isLoading && searchResults.length === 0 && 'search-result-center'
      }`}
    >
      {/* Mostrar el ItemListSkeleton hasta que se tengan los resultados de la búsqueda */}
      {isLoading && <ItemList catalog={[]} />}

      {/* Si los resultados de la búsqueda son mayores que cero, mostramos los productos, sino mostramos una imagen */}
      {!isLoading && searchResults.length > 0 ? (
        <ItemList catalog={searchResults} />
      ) : (
        <img
          src={notFound}
          className='search-result__image'
          alt='Caricatura de persona encogida de hombros'
        />
      )}
    </div>
  );
};

export default SearchResults;
