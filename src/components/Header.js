import React from 'react';

import NavBar from './NavBar';
import SearchBar from './SearchBar';
import MenuMobile from './MenuMobile';

function Header({
  isMenuOpen,
  isSearchOpen,
  handleIsMenuOpen,
  handleIsSearchOpen,
  cartCount,
}) {
  return (
    <header className='header'>
      <NavBar
        isMenuOpen={isMenuOpen}
        handleIsMenuOpen={handleIsMenuOpen}
        handleIsSearchOpen={handleIsSearchOpen}
        cartCount={cartCount}
      />
      {isSearchOpen && <SearchBar />}
      {isMenuOpen && <MenuMobile />}
    </header>
  );
}

export default Header;
