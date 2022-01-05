import React, { useEffect, useState, useContext } from "react";
import CardUser from "../components/CardUser/CardUser";
import "../components/CardContainer/CardContainer.css";
import { useParams } from "react-router";
import { db } from "../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { CartContext } from "../Context/CartContext";

const Category = () => {
  const [productsData, setProductsData] = useState([]);
  const [loader, setLoader] = useState(true);
  const { genero } = useParams();
  const { busqueda, setMagnifyingGlassEnabled } = useContext(CartContext);
  setMagnifyingGlassEnabled(true);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, "productos"),
        where("genero", "==", genero)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductsData(docs);
      setLoader(false);
    };
    getProducts();
  }, [genero]);

  return (
    <>
      {loader ? (
        <p className="loader">Cargando...</p>
      ) : (
        <div className="CardContainer">
          {productsData
            .filter((p) =>
              p.title.toLowerCase().includes(busqueda.toLowerCase())
            )
            .map((producto, indice) => {
              return <CardUser producto={producto} key={indice} />;
            })}
        </div>
      )}
    </>
  );
};

export default Category;
