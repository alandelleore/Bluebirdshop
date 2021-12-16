import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);
  const params = useParams();
  const [loader, setLoader] = useState(true);
  console.log(params);

  const ItemFilterId = items.filter((product) => {
    return product.id === params.id;
  });

  useEffect(() => {
    const getItems = async () => {
      const q = query(collection(db, "productos"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
      setLoader(false);
    };
    getItems();
  }, []);

  /** 
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
    }, 1000);
  }, [params.id]);
*/
  return (
    <>
      <h2 className="titulo">Detalle del producto</h2>
      {loader ? (
        <p className="loader">Cargando...</p>
      ) : (
        <div className="Card2Container">
          {ItemFilterId.map((item, indice) => {
            return <ItemDetail item={item} key={indice} />;
          })}
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
