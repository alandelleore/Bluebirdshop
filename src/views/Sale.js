import React from "react";
import CardContainer from "../components/CardContainer/CardContainer";

function Sale() {
  return (
    <>
      <CardContainer busqueda="perfumes oferta" limit={12} />
    </>
  );
}

export default Sale;
