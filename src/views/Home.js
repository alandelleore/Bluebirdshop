import React from "react";
import CardContainer from "../components/CardContainer/CardContainer";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <h2 className="titulo">Fragancias</h2>
      <CardContainer />
    </>
  );
};

export default Home;
