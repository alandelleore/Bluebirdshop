import React, { useEffect, useState } from "react";
import CardUser from "../CardUser/CardUser";
import "./CardContainer.css";

import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const CardContainer = () => {
  const [productsData, setProductsData] = useState([]);
  const [loader, setLoader] = useState(true);

  console.log(productsData);
  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "productos"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductsData(docs);
      setLoader(false);
    };
    getProducts();
  }, []);

  return (
    <>
      {loader ? (
        <p className="loader">Cargando...</p>
      ) : (
        <div className="CardContainer">
          {productsData.map((producto, indice) => {
            return <CardUser producto={producto} key={indice} />;
          })}
        </div>
      )}
    </>
  );
};

export default CardContainer;
