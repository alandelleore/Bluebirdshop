import React from "react";
import CartWidget from "../Cartwidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container">
      <ul>
        <li>
          <Link to="#">QUIÉNES SOMOS?</Link>
        </li>
        <li>
          <Link to="/women">MUJER</Link>
        </li>
        <li>
          <Link to="/Man">HOMBRE</Link>
        </li>
        <li>
          <Link to="#">IMPORTADOS</Link>
        </li>
        <li>
          <Link to="#">OFERTAS</Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
