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

  /** 
const CardContainer = ({ busqueda, limit }) => {
  const [productos, setProductos] = useState([]);
  //const [busqueda] = useState("carolina herrera bad boy");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}&limit=${limit}`
      )
        .then((resp) => resp.json())
        .then((respObj) => {
          const arrProductos = respObj.results;
          setProductos(arrProductos);
          setLoader(false);
          //console.log(respObj.results);
        })
        .catch((err) => console.log("Error: ", err));
    }, 1000);
  }, [busqueda, limit]);
*/
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
