import { useEffect } from 'react';

import { NavLink } from 'react-router-dom';

const MenuMobile = () => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'unset';
    };
  }, []);

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
