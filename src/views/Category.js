import React, { useEffect, useState } from "react";
import CardUser from "../components/CardUser/CardUser";
import "../components/CardContainer/CardContainer.css";
import { useParams } from "react-router";
import { db } from "../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const Category = () => {
  const [productsData, setProductsData] = useState([]);
  const [loader, setLoader] = useState(true);
  const { genero } = useParams();

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
          {productsData.map((producto, indice) => {
            return <CardUser producto={producto} key={indice} />;
          })}
        </div>
      )}
    </>
  );
};

export default Category;
