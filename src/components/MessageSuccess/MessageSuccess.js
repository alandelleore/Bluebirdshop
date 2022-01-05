import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "../MessageSuccess/MessageSuccess.css";
const MessageSuccess = ({ msg }) => {
  const { cartList, precioTotal, deleteCartList } = useContext(CartContext);

  return (
    <>
      <div className="detalle titulo">
        <div className="operacion">
          <div className="close">
            <Link to="/">
              <span onClick={deleteCartList}>X</span>
            </Link>
          </div>

          <h2 className="titulo">N° de operacion : </h2>
          <p className="titulo">{msg.id}</p>
        </div>
        <h3 className="detalle-final">Detalle:</h3>
        {cartList.map((producto, indice) => {
          return (
            <div key={indice}>
              <p className="detalle-final">
                {producto.quantity} - {producto.title} ${producto.price}
              </p>
            </div>
          );
        })}
        <p className="detalle-total">Total: ${precioTotal}</p>
      </div>
      <Link to="/">
        <span className="volver" onClick={deleteCartList}>
          ⟲ Volver{" "}
        </span>
      </Link>
    </>
  );
};

export default MessageSuccess;
