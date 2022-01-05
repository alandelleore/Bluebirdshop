import React, { useContext } from "react";

import "../Search/Search.css";
import { CartContext } from "../../Context/CartContext";

const Search = () => {
  const { busqueda, actBusqueda, searchEnabled } = useContext(CartContext);

  return (
    <div className={searchEnabled ? "searchEnabled" : "searchDisabled"}>
      <input
        className="buscador"
        type="text"
        placeholder="Buscar..."
        onChange={actBusqueda}
        onClick={actBusqueda}
        value={busqueda}
      />
    </div>
  );
};

export default Search;
