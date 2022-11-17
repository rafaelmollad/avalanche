import React, { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import CartWidget from './CartWidget';
import MenuMobileButton from './MenuMobileButton';
import MenuDesktop from './MenuDesktop';
import Logo from '../Logo/Logo';

const NavBar = () => {
  const { toggleSearch } = useContext(SearchContext);

  return (
    <nav className='navbar'>
      <div className='navbar__left'>
        <MenuMobileButton />

        <Logo logoName='Avalanche' />

        <MenuDesktop />
      </div>
      <div className='navbar__right'>
        <MagnifyingGlassIcon
          className='navbar-icon'
          onClick={() => toggleSearch()}
        />
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
