import "./CartWidget.css";
import carritoIcon from "../../assets/carrito.png";
import searchIcon from "../../assets/search.png";
import loginIcon from "../../assets/login.png";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const { quantItems, cartList } = useContext(CartContext);

  let productosInCart = 0;

  cartList.map((productos) => {
    return (productosInCart = productosInCart + productos.quantity);
  });

  return (
    <>
      <div className="carrito">
        <img src={loginIcon} alt="login" className="menu" />
        <img src={searchIcon} alt="search" className="menu" />
        <Link to="/cart">
          <img src={carritoIcon} alt="carrito" className="menu" />
        </Link>
        {quantItems > 0 && (
          <>
            <p className="cart-count">{productosInCart}</p>
          </>
        )}
      </div>
    </>
  );
};

export default CartWidget;
