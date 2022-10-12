import {
  UserIcon,
  MagnifyingGlassIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import MenuMobileButton from '../MenuMobileButton/MenuMobileButton';
import MenuDesktop from '../MenuDesktop/MenuDesktop';
import Logo from '../Logo/Logo';

const NavBar = ({ isMenuOpen, handleIsMenuOpen, handleIsSearchOpen }) => {
  return (
    <nav className='navbar'>
      <div className='navbar__left'>
        {/* Este es el botón que se va a mostrar solamente en dispositivos móviles */}
        <MenuMobileButton
          isMenuOpen={isMenuOpen}
          handleIsMenuOpen={handleIsMenuOpen}
        />

        <Logo logoName='Avalanche' />

        <MenuDesktop />
      </div>
      <div className='navbar__right'>
        <UserIcon className='navbar-icon' />
        <MagnifyingGlassIcon
          className='navbar-icon'
          onClick={handleIsSearchOpen}
        />
        <HeartIcon className='navbar-icon' />
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
