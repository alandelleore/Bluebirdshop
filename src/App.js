import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/Navbar/NavBar";
import Header from './components/Header/Header';
import ItemListContainer from './components/Itemlistcontainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


class App extends Component {
render() {
  return (
    <>
      <NavBar/>
      <Header
					subtitle='Tienda Online Perfumes '
				/>
      <ItemListContainer
        greeting='Bienvenido a Bluebird, tienda de Fragancias..'
        info='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen It has survived not only five centuries but also the leap into electronic typesettremaining essentially unchanged It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem '
        />
        <ItemCount 
        stock='20'
        initial='0'
        />
    </>
  );
};
}
export default App;
