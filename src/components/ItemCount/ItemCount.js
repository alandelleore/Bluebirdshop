import React, { useState } from "react";
import './ItemCount.css'

const ItemCount = ({stock, initial}) => {
   
    const [counter, setCounter] = useState(parseInt(initial));
    
    const handleCounterUp = () => {
      if (counter >= 0 && counter < stock) {
      setCounter(counter + 1);
    } 
    };
    const handleCounterDown = () => {
      if (counter >= 1) {
        setCounter(counter - 1);
      } 
    }
  
    return (
      <div className="App">
        <h1 className="stock">Stock : {stock} unid.</h1>
        <p className="counter">{counter}</p>
        <button className='botones' onClick={handleCounterDown}>-</button>
        <button className='botones' onClick={handleCounterUp}>+</button>
      </div>
    );
  };
  
  export default ItemCount;