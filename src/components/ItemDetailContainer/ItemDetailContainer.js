import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";

const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getItems = async () => {
      const q = query(
        collection(db, "productos"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
      setLoader(false);
    };
    getItems();
  }, [id]);

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
