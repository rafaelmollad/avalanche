import React from 'react';

import NavBar from './NavBar';

function Header({ isMenuOpen, handleIsMenuOpen, handleIsSearchOpen }) {
  return (
    <header className='header'>
      <NavBar
        isMenuOpen={isMenuOpen}
        handleIsMenuOpen={handleIsMenuOpen}
        handleIsSearchOpen={handleIsSearchOpen}
      />
    </header>
  );
}

export default Header;
