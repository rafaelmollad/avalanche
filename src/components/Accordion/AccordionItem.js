import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='accordion__item'>
      <div className='accordion__title' onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div className='accordion__symbol'>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className='accordion__content'>{content}</div>}
    </div>
  );
};

export default AccordionItem;
