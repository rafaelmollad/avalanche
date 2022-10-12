const Logo = ({ logoName }) => {
  return (
    <h2 className='navbar__logo'>
      <a href='#'>{logoName}</a>
    </h2>
  );
};

export default Logo;
