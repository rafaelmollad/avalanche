import React from 'react';

const FooterWidget = ({ title, links }) => {
  return (
    <ul className='footer-top__menu'>
      <h3 className='footer-top__menu-title'>{title}</h3>
      {links.map((link, index) => (
        <li key={index} className='footer-top__menu-link'>
          <a href='#'>{link}</a>
        </li>
      ))}
    </ul>
  );
};

export default FooterWidget;
