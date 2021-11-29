import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CategoryMan from "./views/CategoryMan";
import CategoryWomen from "./views/CetegoryWomen";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header subtitle="" />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/man" element={<CategoryMan />}></Route>
            <Route path="/women" element={<CategoryWomen />}></Route>
            <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
export default App;
