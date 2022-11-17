import React from 'react';

const Input = ({
  type = 'text',
  label,
  fieldName,
  placeholder,
  required = true,
  register,
  errors,
  pattern,
  validate,
  maxLength,
}) => {
  return (
    <div className='input-container'>
      <label className='input-container__label'>
        {label} {required && '*'}
      </label>

      <input
        type={type}
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
