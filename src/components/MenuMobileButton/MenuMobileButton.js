import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

/* Muestra el menú hamburger o una X dependiendo del estado del menú (abierto o cerrado) */
const MenuMobileButton = ({ isMenuOpen, handleIsMenuOpen }) => {
  return (
    <>
      {!isMenuOpen ? (
        <button
          className='navbar__menu navbar__menu--mobile'
          onClick={handleIsMenuOpen}
        >
          <AiOutlineMenu className='navbar__hamburger-icon' />
        </button>
      ) : (
        <button
          className='navbar__menu navbar__menu--mobile'
          onClick={handleIsMenuOpen}
        >
          <AiOutlineClose className='navbar__close-icon' />
        </button>
      )}
    </>
  );
};

export default MenuMobileButton;
