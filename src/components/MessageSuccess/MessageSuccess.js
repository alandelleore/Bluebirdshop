import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const MessageSuccess = ({ msg }) => {
  const { cartList, deleteCartList, precioTotal } = useContext(CartContext);

  return (
    <>
      <div className="detalle titulo">
        <h2 className="titulo">N° de operacion : </h2>
        <p className="titulo">{msg.id}</p>
        <h3>Detalle:</h3>
        {cartList.map((producto, indice) => {
          return (
            <div key={indice}>
              <p>
                {producto.quantity} - {producto.title} ${producto.price}
              </p>
            </div>
          );
        })}
        <p>Total: ${precioTotal}</p>
      </div>
      <Link to="/">
        <span className="volver" onClick={deleteCartList}>
          ⟲ Volver
        </span>
      </Link>
    </>
  );
};

export default MessageSuccess;
