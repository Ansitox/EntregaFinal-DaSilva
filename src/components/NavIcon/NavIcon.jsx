import logo from "../../media/logo-flower.svg";
import brandName from "../../media/logo-text.svg";

import "./navIcon.css";

export const NavIcon = () => {
  return (
    <div className="icon-container">
      <img src={logo} alt="logo" className="logo" />
      <img src={brandName} alt="Shay Greenhouse" className="brand-name" />
    </div>
  );
};
