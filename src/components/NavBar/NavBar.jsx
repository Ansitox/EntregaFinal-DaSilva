import { CartWidget } from "../CartWidget/CartWidget";
import { NavIcon } from "../NavIcon/NavIcon";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../NavBar/navbar.css";

export const NavBar = () => {
  const location = useLocation();

  return (
    <>
      <div className="navbar-container">
        <NavIcon />

        <ul className="category-container">
          <Link
            to="/"
            className={`category-btn ${
              location.pathname === "/" ? "active-btn" : ""
            }`}
          >
            Todo
          </Link>
          <Link
            to="/category/Herramientas"
            className={`category-btn ${
              location.pathname === "/category/Herramientas" ? "active-btn" : ""
            }`}
          >
            Herramientas
          </Link>
          <Link
            to="/category/Interior"
            className={`category-btn ${
              location.pathname === "/category/Interior" ? "active-btn" : ""
            }`}
          >
            Interior
          </Link>
          <Link
            to="/category/Exterior"
            className={`category-btn ${
              location.pathname === "/category/Exterior" ? "active-btn" : ""
            }`}
          >
            Exterior
          </Link>
          <Link
            to="/category/Aromatica"
            className={`category-btn ${
              location.pathname === "/category/Aromatica" ? "active-btn" : ""
            }`}
          >
            Aromáticas
          </Link>
          <Link
            to="/category/Frutal"
            className={`category-btn ${
              location.pathname === "/category/Frutal" ? "active-btn" : ""
            }`}
          >
            Frutales
          </Link>
        </ul>
        <CartWidget />
      </div>
      <Outlet />
    </>
  );
};
