import React, { useState, useEffect, useRef } from 'react';

const Contador = ({ stock, onAdd, initialQuantity = 1, isItemInCart }) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const isMounted = useRef(false);

  useEffect(() => {
    // Si el item no está en el carrito (porque se eliminó), volver quantity a 1
    // Este código se ejecuta solamente después del primer render porque ya se inicializa quantity en 1
    if (isMounted.current) {
      if (!isItemInCart) {
        setQuantity(1);
      }
    } else {
      isMounted.current = true;
    }
  }, [isItemInCart]);

  // Permitir sumar mientras que el valor sea menor que el stock
  const add = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  // Permitir restar mientras que el valor sea mayor a uno
  const subtract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addItem = () => {
    onAdd(quantity);
  };

  return (
    <div className='contador'>
      <div className='contador__controls'>
        <button className='contador__subtract-button' onClick={subtract}>
          -
        </button>
        <p className='contador__quantity'>{quantity}</p>
        <button className='contador__add-button' onClick={add}>
          +
        </button>
      </div>
      <button className='contador__add-to-cart' onClick={addItem}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Contador;
