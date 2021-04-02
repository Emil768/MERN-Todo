import React from "react";
import "./Navbar";
function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          MERN
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/">Войти</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
