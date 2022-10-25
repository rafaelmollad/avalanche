const Logo = ({ logoName, className }) => {
  return (
    <h2 className={`navbar__logo ${className}`}>
      <a href='#'>{logoName}</a>
    </h2>
  );
};

export default Logo;
