import { useContext } from "react";
import { Cart } from "./Cart";
import { CartContext } from "../../context/CartContext";

export const CartContainer = () => {
  const { cart, cleanCart, getTotalPrice } = useContext(CartContext);

  return (
    <Cart cart={cart} cleanCart={cleanCart} getTotalPrice={getTotalPrice} />
  );
};
