import { PiShoppingCartSimple } from "react-icons/pi";

import { Link } from "react-router-dom";

import "./cartWidget.css";

export const CartWidget = ({ total }) => {
  return (
    <Link to="/cart" className="cart-widget-container">
      <PiShoppingCartSimple color="#f4ee91" size="4vh" />
      <span className="cart-widget-counter">{total}</span>
    </Link>
  );
};
