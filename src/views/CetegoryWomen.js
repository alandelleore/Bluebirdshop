import React from "react";
//import { useParams } from "react-router";
import CardContainer from "../components/CardContainer/CardContainer";

const CategoryWomen = () => {
  //const params = useParams();
  return (
    <>
      <CardContainer busqueda="perfume mujer" limit={12} />
    </>
  );
};

export default CategoryWomen;
