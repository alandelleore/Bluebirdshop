import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({ item }) => {
  const [changeButton, setChangeButton] = useState(false);
  const { addToCart } = useContext(CartContext);

  const onAdd = (quantity) => {
    if (quantity > 0) {
      addToCart(item, quantity);
      setChangeButton(true);
    } else {
      setChangeButton(false);
      alert("Indique la cantidad");
    }
    //alert(`Agregaste  ${quantity}  ${item.title}`);
  };

  return (
    <>
      <div className="productoDetail">
        <img src={item.thumbnail} alt="avatar" />
        <div className="infoDetail">
          <span className="descripcionDetail">{item.title}</span>
          <div className="calificacionDetail">
            <span>★★★★★</span>
            <span>1919</span>
          </div>
          <span className="precioDetail">$ {item.price}</span>
          <span className="medioPagoDetail">Ver medios de pago</span>
          <span className="precio-envioDetail">Llega gratis</span>

          {!changeButton && (
            <>
              <ItemCount stock="20" initial="0" onAdd={onAdd} producto={item} />
            </>
          )}
          {changeButton && (
            <>
              <Link to="/cart">
                <button className="btn-comprar">Finalizar compra</button>
              </Link>
              <Link to="/">
                <button className="btn-comprar">Seguir comprando</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;