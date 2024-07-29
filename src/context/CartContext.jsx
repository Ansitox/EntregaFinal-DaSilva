import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  //   const setAndStorage = (cart) => {
  //     setCart(cart);
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   };

  //   const addToCart = (product) => {};
  let data = {
    cart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
