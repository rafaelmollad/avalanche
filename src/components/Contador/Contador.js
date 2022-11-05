import React, { useState } from 'react';

const Contador = ({ stock, onAdd }) => {
  const [quantity, setQuantity] = useState(1);
  const [newStock, setNewStock] = useState(stock);

  // Permitir sumar mientras que el valor sea menor o igual que el stock
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
    // // Agregué a este código para no permitir que un usuario haga click múltiples veces en agregar al carrito para el mismo producto.
    // if (newStock - quantity > -1) {
    //   setNewStock(newStock - quantity);
    // }
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
