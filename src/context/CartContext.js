import React, { useState, useEffect, createContext } from 'react';
import { useLocation } from 'react-router-dom';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsCartOpen(false);
  }, [pathname]);

  // Agregar producto al carrito
  const addToCart = (item, quantity) => {
    const { id } = item;

    // Si el producto ya se agregó al carrito, sobrescribir la cantidad
    // Sino está en el carrito sólo lo agrego.
    if (isItemInCart(id)) {
      addQuantity(item, quantity);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Chequear si el item ya se agregó al carrito
  const isItemInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  // Sobrescribir la cantidad actual con la nueva cantidad
  const addQuantity = (item, quantity) => {
    // Crear nuevo array de productos con la cantidad actualizada
    const updatedCart = cart.map((itemInCart) => {
      if (itemInCart.id === item.id) {
        return { ...itemInCart, quantity };
      } else {
        return itemInCart;
      }
    });

    // Actualizar el estado con el nuevo carrito
    setCart(updatedCart);
  };

  // Función para sumar la cantidad de un mismo producto
  const getItemTotal = (id) => {
    const foundItem = cart.find((item) => item.id === id);

    return foundItem.price * foundItem.quantity;
  };

  //funcion para vaciar el carrito
  const emptyCart = () => {
    setCart([]);
  };

  // funcion para eliminar un solo producto y actualizar el cart con el array filtrado
  const removeItem = (id) => {
    // Eliminar el item usando el id que se le pasa por parámetro
    const filteredCart = cart.filter((item) => item.id !== id);
    setCart(filteredCart);
  };

  // Función que devuelve el total de todos los productos en el carrito
  const getTotal = () => {
    return cart.reduce(
      (accumulator, currentItem) =>
        accumulator + currentItem.price * currentItem.quantity,
      0
    );
  };

  // Función para sumar unidades totales del carrito (CartWidget)
  const getTotalQuantity = () => {
    return cart.reduce(
      (accumulator, currentItem) => accumulator + currentItem.quantity,
      0
    );
  };

  // Cambiar el estado del carrito de abierto a cerrado y viceversa
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  // Encuentra un item basado en el id, y devuelve la cantidad
  const getItemQuantity = (id) => {
    const foundItem = cart.find((item) => item.id === id);
    return foundItem?.quantity;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        emptyCart,
        getTotal,
        getTotalQuantity,
        removeItem,
        getItemTotal,
        toggleCart,
        closeCart,
        isItemInCart,
        isCartOpen,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
