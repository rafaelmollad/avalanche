import { IconContext } from 'react-icons';
import { AiOutlineUser, AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';

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
        <IconContext.Provider value={{ className: 'navbar-icons' }}>
          <AiOutlineUser />
          <AiOutlineSearch onClick={handleIsSearchOpen} />
          <AiOutlineHeart />
          <CartWidget />
        </IconContext.Provider>
      </div>
    </nav>
  );
};

export default NavBar;
