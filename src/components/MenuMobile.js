/* Este es el menú que se muestra cuando se hace click en el hamburger menu, en dispositivos móviles */
const MenuMobile = () => {
  return (
    <div className='menu-mobile-container'>
      <ul className='menu-mobile'>
        <li className='menu-mobile-link'>
          <a href='#'>Hombre</a>
        </li>
        <li className='menu-mobile-link'>
          <a href='#'>Mujer</a>
        </li>
        <li className='menu-mobile-link'>
          <a href='#'>Niños</a>
        </li>
      </ul>
    </div>
  );
};

export default MenuMobile;
