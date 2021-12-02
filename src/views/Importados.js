import React from "react";
import CardContainer from "../components/CardContainer/CardContainer";

function Importados() {
  return (
    <div>
      <CardContainer busqueda="perfumes importados" limit={12} />
    </div>
  );
}

export default Importados;
