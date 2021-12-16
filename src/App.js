import React, { Component } from "react";
import "./App.css";

//Components
import NavBar from "./components/Navbar/NavBar";
import Header from "./components/Header/Header";

//React Router Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Views
import Home from "./views/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CategoryMan from "./views/CategoryMan";
import CategoryWomen from "./views/CetegoryWomen";
import About from "./views/About";
import Cart from "./views/Cart";
import Sets from "./views/Sets";
import Sale from "./views/Sale";
import CartContext from "./Context/CartContext";

class App extends Component {
  render() {
    return (
      <>
        <CartContext>
          <Router>
            <div className="headerConteiner">
              <Header subtitle="" />
              <NavBar />
            </div>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/About" element={<About />}></Route>
              <Route path="/man" element={<CategoryMan />}></Route>
              <Route path="/women" element={<CategoryWomen />}></Route>
              <Route path="/sets" element={<Sets />}></Route>
              <Route path="/Sale" element={<Sale />}></Route>
              <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </Router>
        </CartContext>
      </>
    );
  }
}
export default App;
