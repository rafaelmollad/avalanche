import React from 'react';

import AccordionItem from './AccordionItem';
import { accordionData } from '../utils/accordionData';

const Accordion = () => {
  return (
    <div className='accordion'>
      {accordionData.map(({ title, content }) => (
        <AccordionItem title={title} content={content} />
      ))}
    </div>
  );
};

export default Accordion;
