import { NavLink } from 'react-router-dom';

const Logo = ({ logoName, className }) => {
  return (
    <h2 className={`navbar__logo ${className}`}>
      <NavLink to='/'>{logoName}</NavLink>
    </h2>
  );
};

export default Logo;
