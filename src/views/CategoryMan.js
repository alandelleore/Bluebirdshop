import React from "react";
//import { useParams } from "react-router";
import CardContainer from "../components/CardContainer/CardContainer";

const CategoryMan = () => {
  //const params = useParams();
  return (
    <>
      <CardContainer busqueda="perfume hombre" limit={12} />
    </>
  );
};

export default CategoryMan;
