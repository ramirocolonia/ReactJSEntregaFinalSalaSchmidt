import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setcartList] = useState([]);

  const addToCart = (product) => {
    const prod = cartList.find((p) => p.id === product.id);
    if (!prod) {
      setcartList([...cartList, product]);
    } else {
      prod.cant += product.cant
      setcartList([...cartList])
    }
  };

  const resetCart = () => {
    setcartList([]);
  };

  const totalProducts = () => cartList.reduce((total, prod) => total += prod.cant, 0)

  const totalPrice = () => cartList.reduce((total, prod) => total += (prod.price * prod.cant), 0)

  const removeProduct = (pid) => {
    setcartList(cartList.filter(product => product.id != pid))
  }
  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        resetCart,
        totalProducts,
        totalPrice,
        removeProduct
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
