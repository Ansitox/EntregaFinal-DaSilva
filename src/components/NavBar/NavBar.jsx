import { CartWidget } from "../CartWidget/CartWidget";
import { NavIcon } from "../NavIcon/NavIcon";
import { Link, Outlet } from "react-router-dom";

import "../NavBar/navbar.css";

export const NavBar = () => {
  return (
    <>
      <div className="navbar-container">
        <NavIcon />

        <ul className="category-container">
          <Link to="/" className="category-btn">
            Todo
          </Link>
          <Link to="/category/Herramientas" className="category-btn">
            Herramientas
          </Link>
          <Link to="/category/Interior" className="category-btn">
            Interior
          </Link>
          <Link to="/category/Exterior" className="category-btn">
            Exterior
          </Link>
          <Link to="/category/Aromática" className="category-btn">
            Aromáticas
          </Link>
          <Link to="/category/Frutal" className="category-btn">
            Frutales
          </Link>
        </ul>
        <CartWidget />
      </div>
      <Outlet />
    </>
  );
};
