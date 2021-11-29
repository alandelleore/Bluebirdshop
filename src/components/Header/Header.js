import React from "react";
import "./Header.css";
import logo from "../../assets/logoperfume1.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="Header">
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
    </div>
  );
};
export default Header;
