import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const { cartList, deleteItem } = useContext(CartContext);
  console.log(cartList);
  return (
    <div>
      <h2 className="titulo">Detalle Carrito</h2>
      <h3>Carrito en construcción</h3>
      {cartList.map((item, index) => (
        <div key={index}>
          <h2>
            {item.quantity}-{item.title}
          </h2>
          <button onClick={deleteItem}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
