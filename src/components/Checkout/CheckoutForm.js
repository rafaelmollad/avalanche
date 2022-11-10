import React from 'react';
import { useForm } from 'react-hook-form';

import Input from './Input';
import Select from './Select';
import { provincias } from '../../utils/provincias';

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert(
      `Tu pedido se realizó correctamente ${data.nombre}. ¡Gracias por tu compra!`
    );
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
        />
        <Input
          label='Apellidos'
          fieldName='apellidos'
          register={register}
          errors={errors}
        />
        <Input
          label='E-mail'
          fieldName='email'
          register={register}
          errors={errors}
          pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g}
        />
        <Input
          label='Teléfono'
          fieldName='telefono'
          register={register}
          errors={errors}
        />
        <Input
          label='Calle'
          fieldName='calle'
          placeholder='Nombre de la calle'
          register={register}
          errors={errors}
        />
        <Input
          label='Altura'
          fieldName='altura'
          placeholder='Número de la casa'
          register={register}
          errors={errors}
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
          placeholder='Ingrese su DNI'
          register={register}
          errors={errors}
        />
      </div>
      <button className='checkout-form__btn'>Realizar Pedido</button>
    </form>
  );
};

export default CheckoutForm;
