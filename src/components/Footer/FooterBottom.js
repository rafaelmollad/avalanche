import React from 'react';

import tarjetas from '../../assets/tarjetas.png';

const FooterBottom = () => {
  return (
    <div className='footer__bottom footer-bottom'>
      <ul className='footer-bottom__left footer-bottom-left'>
        <li className='footer-bottom-left__link'>
          <a href='#'>Términos y Condiciones</a>
        </li>
        <li className='footer-bottom-left__link'>
          <a href='#'>Políticas de Privacidad</a>
        </li>
      </ul>
      <div className='footer-bottom__right footer-bottom-right'>
        <span className='footer-bottom-right__copy'>Copyright © 2022</span>
        <img
          src={tarjetas}
          alt='Tarjetas aceptadas'
          className='footer-bottom-right__tarjetas'
        />
      </div>
    </div>
  );
};

export default FooterBottom;
