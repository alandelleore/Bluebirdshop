import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd, item }) => {
  const [count, setCount] = useState(parseInt(initial));

  const handleCountUp = () => {
    if (count >= 0 && count < stock) {
      setCount(count + 1);
    }
  };
  const handleCountDown = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const handleOnAdd = () => {
    onAdd(count, item);
    setCount(parseInt(initial));
  };

  return (
    <>
      <span className="stockDetail">Stock disponible {stock} unid.</span>
      <div className="countConteiner App">
        <button className="botones" onClick={handleCountDown}>
          -
        </button>
        <div className="counter">
          <p>{count}</p>
        </div>

        <button className="botones" onClick={handleCountUp}>
          +
        </button>
        <button className="botones btnAdd" onClick={handleOnAdd}>
          Add
        </button>
      </div>
    </>
  );
};

export default ItemCount;
