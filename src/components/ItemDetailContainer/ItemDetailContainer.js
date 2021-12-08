import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [items, setItems] = useState({});
  //const [nombreProducto] = useState("hugo boss");
  const [loader, setLoader] = useState(true);
  const params = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${params.id}&limit=1`
      )
        .then((response) => response.json())
        .then((responseObject) => {
          const arrItems = responseObject.results;
          setItems(arrItems);
          setLoader(false);
        });
    }, 2000);
  }, [params.id]);

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
