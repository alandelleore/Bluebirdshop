import React, { useEffect, useState, useContext } from "react";
import CardUser from "../components/CardUser/CardUser";
import "../components/CardContainer/CardContainer.css";
import { CartContext } from "../Context/CartContext";
import { db } from "../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const Sets = () => {
  const [productsData, setProductsData] = useState([]);
  const [loader, setLoader] = useState(true);
  const { busqueda, setMagnifyingGlassEnabled } = useContext(CartContext);
  setMagnifyingGlassEnabled(true);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "productos"), where("set", "==", true));
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
          {productsData
            .filter((p) =>
              p.title.toLowerCase().includes(busqueda.toLocaleLowerCase())
            )
            .map((producto, indice) => {
              return <CardUser producto={producto} key={indice} />;
            })}
        </div>
      )}
    </>
  );
};

export default Sets;
