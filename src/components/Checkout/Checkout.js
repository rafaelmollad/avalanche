import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { addDoc, serverTimestamp } from 'firebase/firestore';

import Input from './Input';
import Select from './Select';
import { provincias } from '../../utils/provincias';
import {
  nameRegex,
  emailRegex,
  phoneRegex,
  dniRegex,
  oneOrMoreDigitsRegex,
} from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';
import { ordersRef } from '../../services/fbConfig';
import { CartContext } from '../../context/CartContext';

const CheckoutForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { cart, getTotal, emptyCart } = useContext(CartContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);

    const order = {
      buyer: data,
      items: cart.map((item) => {
        const { categories, searchTerms, ...filteredItem } = item;
        return filteredItem;
      }),
      total: getTotal(),
      date: serverTimestamp(),
    };

    addDoc(ordersRef, order)
      .then((res) => {
        emptyCart();
        navigate('/checkout/success', {
          replace: true,
          state: { name: data.nombre, orderId: res.id },
        });
      })
      .catch((e) => {
        console.log(e);
        navigate('/checkout/error', {
          replace: true,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='checkout-form'>
      <h2 className='checkout-form__title'>Finalizar compra</h2>
      <div className='checkout-form__billing-container'>
        <Input
          label='Nombre'
          fieldName='nombre'
          register={register}
          errors={errors}
          pattern={nameRegex}
        />
        <Input
          label='Apellidos'
          fieldName='apellidos'
          register={register}
          errors={errors}
          pattern={nameRegex}
        />
        <Input
          type='email'
          label='E-mail'
          fieldName='email'
          register={register}
          errors={errors}
          pattern={emailRegex}
        />
        <Input
          type='email'
          label='Confirmar e-mail'
          fieldName='email-confirmation'
          register={register}
          errors={errors}
          pattern={emailRegex}
          validate={(value) => value === getValues('email')}
        />
        <Input
          type='tel'
          label='Teléfono'
          fieldName='telefono'
          register={register}
          errors={errors}
          pattern={phoneRegex}
        />
        <Input
          label='Calle'
          fieldName='calle'
          placeholder='Nombre de la calle'
          register={register}
          errors={errors}
          pattern={nameRegex}
        />
        <Input
          label='Altura'
          fieldName='altura'
          placeholder='Número de la casa'
          register={register}
          errors={errors}
          pattern={oneOrMoreDigitsRegex}
          maxLength={5}
        />
        <Input
          label='Piso, departamento (opcional)'
          fieldName='departamento'
          required={false}
          register={register}
          errors={errors}
        />
        <Input
          label='Localidad'
          fieldName='localidad'
          register={register}
          errors={errors}
          pattern={nameRegex}
        />
        <Select
          data={provincias}
          fieldName='provincia'
          label='Provincia'
          register={register}
          errors={errors}
        />
        <Input
          label='Código postal'
          fieldName='cp'
          register={register}
          errors={errors}
        />
        <Input
          label='Documento'
          fieldName='documento'
          placeholder='Ingrese su DNI sin puntos'
          register={register}
          errors={errors}
          pattern={dniRegex}
        />
      </div>
      <button
        className='checkout-form__btn'
        disabled={isLoading || !cart.length}
      >
        {isLoading ? 'Enviando Pedido...' : 'Realizar Pedido'}
      </button>
    </form>
  );
};

export default CheckoutForm;
