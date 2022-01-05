import React, { useContext } from "react";

import { CartContext } from "../Context/CartContext";
import "./views.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartList,
    deleteItem,
    deleteCartList,
    precioTotal,
    setMagnifyingGlassEnabled,
  } = useContext(CartContext);
  setMagnifyingGlassEnabled(false);
  return (
    <>
      {cartList.length ? (
        <>
          <div className="detalle-cart">
            <div className="detalle-producto">
              <span>Producto</span>
            </div>
            <div className="detalle-descripcion">
              <span>Descripción</span>
            </div>
            <div className="detalle-precio">
              <span>Precio</span>
            </div>
            <div className="detalle-cantidad">
              <span>Cantidad</span>
            </div>
          </div>

          {cartList.map((item, index) => (
            <div key={index}>
              <hr></hr>
              <div className="cartDetail">
                <div className="btn-deleteCart" title="Eliminar producto">
                  <span onClick={() => deleteItem(item.id, item.quantity)}>
                    X
                  </span>
                </div>
                <div className="cartImg">
                  <img src={item.img} alt="avatar" />
                </div>
                <div className="cartInfo">
                  <span className="cartDescription">{item.title}</span>
                </div>
                <div className="cartPrice">
                  <span>${item.price}</span>
                </div>
                <div className="cartQtn">
                  <span>{item.quantity}</span>
                </div>
              </div>
              <hr></hr>
            </div>
          ))}
          <span className="cartDelete" onClick={deleteCartList}>
            ⌫ Vaciar Carrito
          </span>
          <div className="precioTotal">
            <p className="line-precioTotal">
              <span className="totalText">TOTAL: </span>${precioTotal}
            </p>

            <Link to="/shooping">
              <button className="btn-comprar btn-comprar2">
                Finalizar compra
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <h2 className="titulo">No hay elementos en el carrito</h2>
          <Link to="/">
            <span className="volver">⟲ Volver</span>
          </Link>
        </>
      )}
    </>
  );
};

export default Cart;
