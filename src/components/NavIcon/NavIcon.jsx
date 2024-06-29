import logo from "../../media/logo-flower.svg";
import brandName from "../../media/logo-text.svg";
import { Link } from "react-router-dom";

import "./navIcon.css";

export const NavIcon = () => {
  return (
    <Link to="/" className="icon-container">
      <img src={logo} alt="logo" className="logo" />
      <img src={brandName} alt="Shay Greenhouse" className="brand-name" />
    </Link>
  );
};
