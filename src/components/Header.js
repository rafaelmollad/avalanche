import React from 'react';

import NavBar from './NavBar';

function Header({
  isMenuOpen,
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
    </header>
  );
}

export default Header;
