import React from "react";
import "./Header.css";
import logo from "../../assets/logoperfume1.png";
import CartDetail from "../CartDetail/CartDetail";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const Header = () => {
  return (
    <div className="Header">
      <Search />
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <CartDetail />
    </div>
  );
};
export default Header;
