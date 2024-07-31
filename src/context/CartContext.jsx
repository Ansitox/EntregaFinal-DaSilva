import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const setAndStorage = (cart) => {
    setCart(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const getQuantityById = (id) => {
    return cart.find((product) => product.id === id)?.quantity;
  };

  const addToCart = (product) => {
    const { stock, ...productWithoutStock } = product;

    if (isInCart(product.id)) {
      let newCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: product.quantity };
        } else {
          return item;
        }
      });
      setAndStorage(newCart);
    } else {
      setAndStorage([...cart, productWithoutStock]);
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  let data = {
    cart,
    getQuantityById,
    addToCart,
    getTotalItems,
    isInCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
