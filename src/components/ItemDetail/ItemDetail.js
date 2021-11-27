import React from "react";
import "./ItemDetail.css";

const ItemDetail = (item) => {
  return (
    <>
      <div className="productoDetail">
        <img src={item.item.thumbnail} alt="avatar" />
        <div className="infoDetail">
          <span className="descripcionDetail">{item.item.title}</span>
          <div className="calificacionDetail">
            <span>★★★★★</span>
            <span>1919</span>
          </div>
          <span className="precioDetail">$ {item.item.price}</span>
          <span className="medioPagoDetail">Ver medios de pago</span>
          <span className="precio-envioDetail">Llega gratis</span>

          <span className="stockDetail">Stock disponible</span>
          <button className="btn-detail">Comprar</button>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
