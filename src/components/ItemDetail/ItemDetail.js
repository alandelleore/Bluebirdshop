import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({ item }) => {
  const [changeButton, setChangeButton] = useState(false);
  const { addToCart, setMagnifyingGlassEnabled, setBusqueda } =
    useContext(CartContext);
  const [mensajeError, setMensajeError] = useState(false);
  setMagnifyingGlassEnabled(false);
  setBusqueda("");

  const onAdd = (quantity) => {
    if (quantity > 0) {
      addToCart(item, quantity);
      setChangeButton(true);
      setMensajeError(false);
    } else {
      setChangeButton(false);
      setMensajeError(true);
    }
  };

  return (
    <>
      <div className="productoDetail">
        <img src={item.img} alt="avatar" />
        <div className="infoDetail">
          <span className="descripcionDetail">{item.title}</span>
          <div className="calificacionDetail">
            <span>★★★★★</span>

            <p className="description">{item.description}</p>
          </div>
          <span className="precioDetail">$ {item.price}</span>
          <span className="medioPagoDetail">Ver medios de pago</span>
          <span className="precio-envioDetail">Llega gratis</span>

          {!changeButton && (
            <>
              <ItemCount
                stock={item.stock}
                initial="0"
                onAdd={onAdd}
                producto={item}
              />
            </>
          )}
          {mensajeError && <p className="errorCount">Indique la cantidad</p>}
          {changeButton && (
            <>
              <Link to="/cart">
                <button className="btn-comprar">Ir al Carrito</button>
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
