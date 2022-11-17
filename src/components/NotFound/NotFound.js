import React from 'react';

import notFound from '../../assets/not-found.png';

const NotFound = () => {
  return (
    <div className='not-found'>
      <img
        src={notFound}
        className='not-found__image'
        alt='Caricatura de persona encogida de hombros'
      />
    </div>
  );
};

export default NotFound;
