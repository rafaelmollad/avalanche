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
    const q = query(
      productsRef,
      where('searchTerms', 'array-contains', searchQuery)
    );

    getItems(q)
      .then((items) => {
        setSearchResults(items);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      setSearchResults([]);
      setIsLoading(true);
    };
  }, [searchQuery]);

  return (
    <div className='search-result'>
      {isLoading && <ItemList items={[]} />}

      {!isLoading && searchResults.length > 0 ? (
        <ItemList items={searchResults} />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default SearchResults;
