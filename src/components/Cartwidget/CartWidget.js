import "./CartWidget.css";
import carritoIcon from "../../assets/carrito.png";
import searchIcon from "../../assets/search.png";
//import CartDetail from "../CartDetail/CartDetail";
//import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const {
    quantItems,
    cartList,
    onHandleClickCart,
    onHandleClickSearch,
    magnifyingGlassEnabled,
  } = useContext(CartContext);

  let productosInCart = 0;

  cartList.map((productos) => {
    return (productosInCart = productosInCart + productos.quantity);
  });

  return (
    <>
      <div className="carrito">
        <div className={magnifyingGlassEnabled ? "lupa-on" : "lupa-off"}>
          <img
            src={searchIcon}
            alt="search"
            className="menu"
            onClick={onHandleClickSearch}
          />
        </div>

        <img
          src={carritoIcon}
          alt="carrito"
          className="menu"
          onClick={onHandleClickCart}
        />

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
