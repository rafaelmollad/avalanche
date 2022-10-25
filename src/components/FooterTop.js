import React from 'react';

import Logo from './Logo';
import FooterWidget from './FooterWidget';

const FooterTop = () => {
  return (
    <div className='footer__top footer-top'>
      <Logo logoName='avalanche' className='footer-top__logo' />
      <FooterWidget
        title='Nosotros'
        links={['Locales', 'Términos y Condiciones', 'Políticas de Privacidad']}
      />
      <FooterWidget
        title='Ayuda'
        links={[
          'Preguntas Frecuentes',
          'Envío y Seguimiento',
          'Botón de Arrepentimiento',
          'Contacto',
        ]}
      />
      <FooterWidget title='Seguinos' links={['Facebook', 'Instagram']} />
    </div>
  );
};

export default FooterTop;
