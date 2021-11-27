import React from "react";
//import ItemDetail from "../ItemDetail/ItemDetail";
import "./CardUser.css";

const CardUser = (producto) => (
  <div className="producto">
    <img src={producto.producto.thumbnail} alt="avatar" />
    <div className="info">
      <span className="tipo-envio">Envío con normalidad</span>
      <span className="precio">$ {producto.producto.price}</span>
      <span className="precio-envio">Envío gratis</span>
      <span className="descripcion">{producto.producto.title}</span>
      <div className="calificacion">
        <span>★★★★★</span>
        <span>1919</span>
      </div>
      <span className="ubicacion">
        {producto.producto.seller_address.city.name}
      </span>
    </div>
  </div>
);

export default CardUser;
