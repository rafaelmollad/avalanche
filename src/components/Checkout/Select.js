import React from 'react';

const Select = ({
  data,
  fieldName,
  label,
  required = true,
  register,
  errors,
}) => {
  return (
    <div className='input-container'>
      <label className='input-container__label'>
        {label} {required && '*'}
      </label>

      <select
        className={`input-container__input ${
          errors[fieldName] ? 'input-container__input--error' : ''
        }`}
        {...register(fieldName, { required })}
        defaultValue=''
      >
        <option hidden value=''>
          Elige una opción...
        </option>
        {data.map((optionValue, id) => (
          <option key={id} value={optionValue}>
            {optionValue}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
