import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function About() {
  const { setMagnifyingGlassEnabled } = useContext(CartContext);
  setMagnifyingGlassEnabled(false);

  return (
    <div>
      <h2 className="titulo">Bluebird</h2>
      <p className="text titulo">
        Bluebird es un E-commerce de una perfumería realizado por Alan Delle Ore
        como parte del proyecto final del curso de React Js de CODERHOUSE.
      </p>
    </div>
  );
}

export default About;
