import "./CartWidget.css";
import carritoIcon from "../../assets/carrito.png";
import searchIcon from "../../assets/search.png";
import loginIcon from "../../assets/login.png";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <>
      <div className="carrito">
        <img src={loginIcon} alt="login" className="menu" />
        <img src={searchIcon} alt="search" className="menu" />
        <Link to="/cart">
          <img src={carritoIcon} alt="carrito" className="menu" />
        </Link>
      </div>
    </>
  );
};

export default CartWidget;
