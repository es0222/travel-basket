import React, { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export const useBasket = () => useContext(BasketContext);

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([
    { id: 1, title: "Paris Getaway", price: 899 },
    { id: 2, title: "Maldives Escape", price: 1299 },
    { id: 3, title: "Tokyo Adventure", price: 1050 },
  ]);

  const addToBasket = (item) => setBasket([...basket, item]);

  const removeFromBasket = (id) => {
    setBasket(basket.filter((item) => item.id !== id));
  };

  const clearBasket = () => setBasket([]);

  const totalPrice = basket.reduce((sum, item) => sum + item.price, 0);

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, clearBasket, totalPrice }}
    >
      {children}
    </BasketContext.Provider>
  );
};