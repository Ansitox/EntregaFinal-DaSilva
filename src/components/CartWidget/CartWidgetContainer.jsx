import { useContext } from "react";
import { CartWidget } from "./CartWidget";
import { CartContext } from "../../context/CartContext";

export const CartWidgetContainer = () => {
  const { getTotalItems } = useContext(CartContext);
  return <CartWidget total={getTotalItems()} />;
};
