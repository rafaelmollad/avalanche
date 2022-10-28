import { NavLink } from 'react-router-dom';

/* Este es el menú que se muestra cuando se hace click en el hamburger menu, en dispositivos móviles */
const MenuMobile = () => {
  return (
    <div className='menu-mobile-container'>
      <ul className='menu-mobile'>
        <li className='menu-mobile-link'>
          <NavLink to='/category/hombre'>Hombre</NavLink>
        </li>
        <li className='menu-mobile-link'>
          <NavLink to='/category/mujer'>Mujer</NavLink>
        </li>
        <li className='menu-mobile-link'>
          <NavLink to='category/denim'>Denim</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuMobile;
