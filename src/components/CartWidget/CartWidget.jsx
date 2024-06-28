import { PiShoppingCartSimple } from "react-icons/pi";

import "./cartWidget.css";

export const CartWidget = () => {
  return (
    <div className="cart-widget-container">
      <PiShoppingCartSimple color="#F4EE91" size="4vh" />
      <span className="cart-widget-counter">0</span>
    </div>
  );
};
