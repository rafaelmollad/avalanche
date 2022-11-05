import React, { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

import {
  UserIcon,
  MagnifyingGlassIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

import CartWidget from './CartWidget';
import MenuMobileButton from './MenuMobileButton';
import MenuDesktop from './MenuDesktop';
import Logo from '../Logo/Logo';

const NavBar = () => {
  const { toggleSearch } = useContext(SearchContext);

  return (
    <nav className='navbar'>
      <div className='navbar__left'>
        {/* Este es el botón que se va a mostrar solamente en dispositivos móviles */}
        <MenuMobileButton />

        <Logo logoName='Avalanche' />

        <MenuDesktop />
      </div>
      <div className='navbar__right'>
        <UserIcon className='navbar-icon' />
        <MagnifyingGlassIcon
          className='navbar-icon'
          onClick={() => toggleSearch()}
        />
        <HeartIcon className='navbar-icon' />
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
