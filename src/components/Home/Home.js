import React from 'react';
import Featured from '../Featured/Featured';
import Hero from '../Hero/Hero';

const Home = () => {
  return (
    <div>
      <div className='wrapper'>
        <Hero />
      </div>
      <Featured />
    </div>
  );
};

export default Home;
