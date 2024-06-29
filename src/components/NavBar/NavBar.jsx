import { CartWidget } from "../CartWidget/CartWidget";
import { NavIcon } from "../NavIcon/NavIcon";
import { Link, Outlet } from "react-router-dom";

import "../NavBar/navbar.css";

export const NavBar = () => {
  return (
    <>
      <div className="navbar-container">
        <Link to="/">
          <NavIcon />
        </Link>

        <ul className="category-container">
          <Link to="/category/:category" className="category-btn">
            Todo
          </Link>
          <Link to="/category/:category" className="category-btn">
            Herramientas
          </Link>
          <Link to="/category/:category" className="category-btn">
            Interior
          </Link>
          <Link to="/category/:category" className="category-btn">
            Exterior
          </Link>
          <Link to="/category/:category" className="category-btn">
            Aromáticas
          </Link>
          <Link to="/category/:category" className="category-btn">
            Frutales
          </Link>
        </ul>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
      <Outlet />
    </>
  );
};
