import React from "react";
import "../../pages/App/App.scss";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <Link to="/">
        <h3>Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
