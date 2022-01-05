import React, { useContext } from "react";
import CardContainer from "../components/CardContainer/CardContainer";
import Banner from "../components/Banner/Banner";
import { CartContext } from "../Context/CartContext";

const Home = () => {
  const { setMagnifyingGlassEnabled } = useContext(CartContext);
  setMagnifyingGlassEnabled(true);
  return (
    <>
      <Banner />
      <h2 className="titulo">Fragancias</h2>
      <CardContainer />
    </>
  );
};

export default Home;
