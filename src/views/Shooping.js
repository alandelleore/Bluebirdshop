import React, { useState, useContext } from "react";
import CheckOut from "../components/CheckOut/CheckOut";
import { CartContext } from "../Context/CartContext";

function Shooping() {
  const [loader, setLoader] = useState(true);
  const { setMagnifyingGlassEnabled } = useContext(CartContext);
  setMagnifyingGlassEnabled(false);

  setTimeout(() => {
    setLoader(false);
  }, 1000);

  return (
    <>
      {loader ? (
        <p className="loader">Cargando...</p>
      ) : (
        <div>
          <CheckOut />
        </div>
      )}
    </>
  );
}

export default Shooping;
