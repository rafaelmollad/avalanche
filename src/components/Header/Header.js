import React, { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { SearchContext } from '../../context/SearchContext';

import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';
import MenuMobile from '../NavBar/MenuMobile';

function Header() {
  const { isMenuOpen } = useContext(MenuContext);
  const { isSearchOpen } = useContext(SearchContext);

  return (
    <header className='header'>
      <NavBar />
      {isSearchOpen && <SearchBar />}
      {isMenuOpen && <MenuMobile />}
    </header>
  );
}

export default Header;
