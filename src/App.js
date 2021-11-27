import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/Itemlistcontainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Header subtitle="Tienda Online Perfumes " />

        <ItemListContainer />
        <ItemCount stock="20" initial="0" />
      </>
    );
  }
}
export default App;
