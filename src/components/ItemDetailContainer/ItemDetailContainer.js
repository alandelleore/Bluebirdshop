import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);
  const [nombreProducto] = useState("hugo boss");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${nombreProducto}&limit=1`
      )
        .then((response) => response.json())
        .then((responseObject) => {
          const arrItems = responseObject.results;
          setItems(arrItems);
          setLoader(false);
          console.log(responseObject.results);
        });
    }, 2000);
  }, [nombreProducto]);

  return (
    <>
      <h2 className="titulo">Detalle del producto</h2>
      {loader ? (
        <p className="loader">Cargando...</p>
      ) : (
        <div className="Card2Container">
          {items.map((item, indice) => {
            return <ItemDetail item={item} key={indice} />;
          })}
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
