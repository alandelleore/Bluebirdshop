import React from "react";
//import ItemDetail from "../ItemDetail/ItemDetail";
import { Link } from "react-router-dom";
import "./CardUser.css";

const CardUser = ({ producto }) => (
  <>
    <Link to={`/item/${producto.id}`} className="link">
      <div className="producto">
        <img
          src={producto.img}
          alt="avatar"
          style={{ width: "280px", height: "280px" }}
        />
        <div className="info">
          <span className="tipo-envio">Envío con normalidad</span>
          <span className="precio">$ {producto.price}</span>
          <span className="precio-envio">Envío gratis</span>
          <span className="descripcion">{producto.title}</span>
          <div className="calificacion">
            <span>★★★★★</span>
            <span>1919</span>
          </div>
          <span className="ubicacion">{producto.genero}</span>
        </div>
      </div>
    </Link>
  </>
);

export default CardUser;
