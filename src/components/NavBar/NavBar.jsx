import { Link, Outlet } from "react-router-dom";

import { NavIcon } from "../NavIcon/NavIcon";
import { CartWidgetContainer } from "../CartWidget/CartWidgetContainer";

import "../NavBar/navbar.css";

export const NavBar = ({ location, categories }) => {
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
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.key}`}
              className={`category-btn ${
                location.pathname === `/category/${category.key}`
                  ? "active-btn"
                  : ""
              }`}
            >
              {category.description}
            </Link>
          ))}
        </ul>
        <CartWidgetContainer />
      </div>
      <Outlet />
    </>
  );
};
