import React from 'react';

const Input = ({
  label,
  fieldName,
  placeholder,
  required = true,
  register,
  errors,
  pattern,
  validate,
  number,
  maxLength,
}) => {
  return (
    <div className='input-container'>
      <label className='input-container__label'>
        {label} {required && '*'}
      </label>

      <input
        type={number ? 'number' : 'text'}
        className={`input-container__input ${
          errors[fieldName] ? 'input-container__input--error' : ''
        }`}
        placeholder={placeholder}
        {...register(fieldName, {
          required,
          pattern,
          validate,
          maxLength,
        })}
      />
    </div>
  );
};

export default Input;
