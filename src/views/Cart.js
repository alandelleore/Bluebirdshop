import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "./views.css";
import { Link } from "react-router-dom";

const Cart = ({ item }) => {
  const { cartList, deleteItem, deleteCartList } = useContext(CartContext);
  const precioTotal = Object.values(cartList).reduce(
    (acc, { quantity, price }) => acc + quantity * price,
    0
  );
  console.log(cartList);
  console.log(precioTotal);

  return (
    <>
      {cartList.length ? (
        <>
          <h2 className="titulo">Detalle Carrito</h2>

          {cartList.map((item, index) => (
            <div key={index}>
              <div className="cartDetail">
                <div className="btn-deleteCart" title="Eliminar artículo">
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
            <div>
              <p>Total:</p>
            </div>
            <div>
              <h2>${precioTotal}</h2>
            </div>
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
