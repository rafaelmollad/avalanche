import React from 'react';

import { provincias } from '../../utils/provincias';

const Input = ({
  label,
  name,
  value,
  handleChange,
  placeholder,
  required = true,
}) => {
  return (
    <div className='input-container'>
      <label className='input-container__label'>
        {label} {required && '*'}
      </label>

      {/* Mostrar un select si el field es provincia, sino mostrar un input de tipo text */}
      {name === 'provincia' ? (
        <>
          <select
            name={name}
            className='input-container__select'
            onChange={handleChange}
            defaultValue=''
          >
            <option hidden value=''>
              Elige una opción...
            </option>
            {provincias.map((provincia, id) => (
              <option key={id} value={provincia}>
                {provincia}
              </option>
            ))}
          </select>
        </>
      ) : (
        <input
          type='text'
          name={name}
          value={value}
          className='input-container__input'
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default Input;
