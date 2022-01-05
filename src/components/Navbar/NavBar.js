import React from "react";
import CartWidget from "../Cartwidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container">
      <ul>
        <li>
          <Link to="/About">ABOUT</Link>
        </li>
        <li>
          <Link to="/category/mujer">MUJER</Link>
        </li>
        <li>
          <Link to="/category/hombre">HOMBRE</Link>
        </li>
        <li>
          <Link to="/Sets">SETS</Link>
        </li>
        <li>
          <Link to="/Sale">SALE</Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
