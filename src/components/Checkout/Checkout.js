import React, { useState } from 'react';

import Input from './Input';
import { checkoutFields } from '../../utils/checkoutFields';

const Checkout = () => {
  const [data, setData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    calle: '',
    altura: '',
    departamento: '',
    localidad: '',
    provincia: '',
    cp: '',
    documento: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);

    setData({ ...data, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className='checkout-form'>
      <h2 className='checkout-form__title'>Finalizar compra</h2>
      <div className='checkout-form__billing-container'>
        {checkoutFields.map(
          ({ label, fieldName, placeholder, required }, id) => (
            <Input
              key={id}
              label={label}
              name={fieldName}
              value={data[fieldName]}
              placeholder={placeholder}
              required={required}
              handleChange={handleChange}
            />
          )
        )}
      </div>
      <button className='checkout-form__btn'>Realizar Pedido</button>
    </form>
  );
};

export default Checkout;
