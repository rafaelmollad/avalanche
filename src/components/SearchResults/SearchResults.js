import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { query, where } from 'firebase/firestore';

import { productsRef } from '../../services/fbConfig';
import ItemList from '../ItemListContainer/ItemList/ItemList';
import NotFound from '../NotFound/NotFound';
import { getItems } from '../../utils/helpers';

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query').toLowerCase();

  useEffect(() => {
    // Traer todos los productos donde el searchQuery se encuentra en el array searchTerms
    const q = query(
      productsRef,
      where('searchTerms', 'array-contains', searchQuery)
    );

    // Request para traer los productos...
    getItems(q)
      .then((items) => {
        setSearchResults(items);
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
    <div className='search-result'>
      {/* Mostrar el ItemListSkeleton hasta que se tengan los resultados de la búsqueda */}
      {isLoading && <ItemList items={[]} />}

      {/* Si los resultados de la búsqueda son mayores que cero, mostramos los productos, sino mostramos una imagen */}
      {!isLoading && searchResults.length > 0 ? (
        <ItemList items={searchResults} />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default SearchResults;
