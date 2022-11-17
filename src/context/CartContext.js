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

  const addToCart = (item, quantity) => {
    const { id } = item;

    if (isItemInCart(id)) {
      addQuantity(item, quantity);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const isItemInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const addQuantity = (item, quantity) => {
    const updatedCart = cart.map((itemInCart) => {
      if (itemInCart.id === item.id) {
        return { ...itemInCart, quantity };
      } else {
        return itemInCart;
      }
    });

    setCart(updatedCart);
  };

  const getItemTotal = (id) => {
    const foundItem = cart.find((item) => item.id === id);

    return foundItem.price * foundItem.quantity;
  };

  const emptyCart = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    const filteredCart = cart.filter((item) => item.id !== id);
    setCart(filteredCart);
  };

  const getTotal = () => {
    return cart.reduce(
      (accumulator, currentItem) =>
        accumulator + currentItem.price * currentItem.quantity,
      0
    );
  };

  const getTotalQuantity = () => {
    return cart.reduce(
      (accumulator, currentItem) => accumulator + currentItem.quantity,
      0
    );
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

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
