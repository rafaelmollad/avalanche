import { NavLink } from 'react-router-dom';

const MenuDesktop = () => {
  return (
    <ul className='navbar__menu navbar__menu--desktop'>
      <li className='navbar__link'>
        <NavLink to='/category/hombre'>Hombre</NavLink>
      </li>
      <li className='navbar__link'>
        <NavLink to='category/mujer'>Mujer</NavLink>
      </li>
      <li className='navbar__link'>
        <NavLink to='category/denim'>Denim</NavLink>
      </li>
    </ul>
  );
};

export default MenuDesktop;
