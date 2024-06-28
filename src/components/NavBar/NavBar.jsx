import { CartWidget } from "../CartWidget/CartWidget";
import { NavIcon } from "../NavIcon/NavIcon";

import "../NavBar/navbar.css";

export const NavBar = () => {
  return (
    <div className="navbar-container">
      <NavIcon />

      <ul className="category-container">
        <li className="category-btn">Exterior</li>
        <li className="category-btn">Interior</li>
        <li className="category-btn">Huerta</li>
        <li className="category-btn">Ornamentales</li>
        <li className="category-btn">Frutales</li>
      </ul>

      <CartWidget />
    </div>
  );
};
