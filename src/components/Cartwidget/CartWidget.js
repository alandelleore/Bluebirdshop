import "./CartWidget.css";
import carritoIcon from "../../assets/carrito.png";
import searchIcon from "../../assets/search.png";
import loginIcon from "../../assets/login.png";

const CartWidget = () => {
  return (
    <>
      <div className="carrito">
        <img src={loginIcon} alt="login" />
        <img src={searchIcon} alt="search" />
        <img src={carritoIcon} alt="carrito" />
      </div>
    </>
  );
};

export default CartWidget;
