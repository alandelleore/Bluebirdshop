import React, { useContext } from "react";

import { CartContext } from "../../Context/CartContext";
import "./CartDetail.css";
import { Link } from "react-router-dom";

const CartDetail = () => {
  const { cartList, deleteItem, enabled, onHandleClickCart, precioTotal } =
    useContext(CartContext);

  return (
    <div className={enabled ? "cart-on" : "cart-off"}>
      <div className="conteinerDetail ">
        {cartList.length ? (
          <>
            {cartList.map((item, index) => (
              <div key={index}>
                <div className="cartDetail2">
                  <div className="cartImg2">
                    <img src={item.img} alt="avatar" />
                  </div>
                  <div className="cartQtn">
                    <span>{item.quantity}</span>
                  </div>
                  <div className="cartInfo">
                    <span className="cartDescription">{item.title}</span>
                  </div>
                  <div className="cartPrice">
                    <span>${item.price}</span>
                  </div>
                  <div className="btn-deleteCart2" title="Eliminar producto">
                    <span onClick={() => deleteItem(item.id, item.quantity)}>
                      X
                    </span>
                  </div>
                </div>
                <hr className="divisor"></hr>
              </div>
            ))}

            <div className="precioTotal2">
              <p className="line-precioTotal2">
                <span className="totalText2">Subtotal: </span>${precioTotal}
              </p>

              <Link to="/shooping">
                <button className=" btn-comprar2" onClick={onHandleClickCart}>
                  Finalizar Compra
                </button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <p className="titulo">No hay elementos en el carrito</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDetail;
