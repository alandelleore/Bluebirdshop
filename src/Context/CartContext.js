import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cartList, setCartList] = useState([]);

  function addToCart(item, quantity) {
    if (cartList.some((element) => element.id === item.id)) {
      let index = cartList.findIndex((e) => e.id === item.id);
      let producto = cartList[index];
      producto.quantity = producto.quantity + quantity;
      const newCartList = [...cartList];
      newCartList.splice(index, 1, producto);
      setCartList([...newCartList]);
    } else {
      let producto = { ...item, quantity };
      setCartList([...cartList, producto]);
    }
  }

  function deleteItem(id) {
    let index = cartList.findIndex((e) => e.id === id);
    const newCartList = [...cartList];
    newCartList.splice(index, 1);
    setCartList([...newCartList]);
  }

  function deleteCartList() {
    setCartList([]);
  }

  return (
    <CartContext.Provider
      value={{ addToCart, deleteItem, deleteCartList, cartList, setCartList }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
