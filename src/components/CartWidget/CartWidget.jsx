import { PiShoppingCartSimple } from "react-icons/pi";
import { Link } from "react-router-dom";

import "./cartWidget.css";

export const CartWidget = () => {
  return (
    <Link to="/cart" className="cart-widget-container">
      <PiShoppingCartSimple color="#F4EE91" size="4vh" />
      <span className="cart-widget-counter">0</span>
    </Link>
  );
};
