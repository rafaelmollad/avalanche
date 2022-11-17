import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: '/search',
      search: `?query=${searchQuery}`,
    });

    setSearchQuery('');
  };

  return (
    <form onSubmit={HandleSubmit} className='search-bar'>
      <input
        type='text'
        placeholder='¿Qué estás buscando?'
        className='search-bar__input'
        value={searchQuery}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
