import {
  UserIcon,
  MagnifyingGlassIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

import CartWidget from './CartWidget';
import MenuMobileButton from './MenuMobileButton';
import MenuDesktop from './MenuDesktop';
import Logo from './Logo';

const NavBar = ({
  isMenuOpen,
  handleIsMenuOpen,
  handleIsSearchOpen,
  cartCount,
}) => {
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
        <CartWidget cartCount={cartCount} />
      </div>
    </nav>
  );
};

export default NavBar;
