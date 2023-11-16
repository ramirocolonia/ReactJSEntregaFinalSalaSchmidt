import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (product) => {
    setCartList(product);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
