import { useContext } from "react";
import { Cart } from "./Cart";
import { CartContext } from "../../context/CartContext";

export const CartContainer = () => {
  const { cart, getTotalItems, cleanCart } = useContext(CartContext);

  return (
    <Cart cart={cart} totalItems={getTotalItems()} cleanCart={cleanCart} />
  );
};
