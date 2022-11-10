import React from 'react';

const Input = ({
  label,
  fieldName,
  placeholder,
  required = true,
  register,
  errors,
  pattern,
}) => {
  return (
    <div className='input-container'>
      <label className='input-container__label'>
        {label} {required && '*'}
      </label>

      <input
        type='text'
        className={`input-container__input ${
          errors[fieldName] ? 'input-container__input--error' : ''
        }`}
        placeholder={placeholder}
        {...register(fieldName, {
          required,
          pattern,
        })}
      />
    </div>
  );
};

export default Input;
