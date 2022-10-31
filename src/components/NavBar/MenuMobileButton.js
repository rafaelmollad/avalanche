import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';

/* Muestra el menú hamburger o una X dependiendo del estado del menú (abierto o cerrado) */
const MenuMobileButton = ({ isMenuOpen, handleIsMenuOpen }) => {
  return (
    <>
      {!isMenuOpen ? (
        <button
          className='navbar__menu navbar__menu--mobile'
          onClick={handleIsMenuOpen}
        >
          <Bars2Icon className='navbar__hamburger-icon' />
        </button>
      ) : (
        <button
          className='navbar__menu navbar__menu--mobile'
          onClick={handleIsMenuOpen}
        >
          <XMarkIcon className='navbar__close-icon' />
        </button>
      )}
    </>
  );
};

export default MenuMobileButton;
