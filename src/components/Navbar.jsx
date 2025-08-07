import React, { useState } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";

export default function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setIsMenuClicked((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar-items">
        <h1 className="navbar-logo">Trippy</h1>

        <div className="menu-icons">
          <i
            onClick={handleMenuClick}
            className={isMenuClicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={isMenuClicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <button>
          <Link to="/signup" className="link">Sign Up</Link>
        </button>
      </nav>
    </>
  );
}
