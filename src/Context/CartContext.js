import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cartList, setCartList] = useState([]);
  const [quantItems, setQuantItems] = useState(0);

  function addToCart(item, quantity) {
    if (cartList.some((element) => element.id === item.id)) {
      let index = cartList.findIndex((e) => e.id === item.id);
      let producto = cartList[index];
      producto.quantity = producto.quantity + quantity;

      const newCartList = [...cartList];
      newCartList.splice(index, 1, producto);
      setCartList([...newCartList]);
      setQuantItems(quantItems + quantity);
    } else {
      let producto = { ...item, quantity };
      setCartList([...cartList, producto]);
      setQuantItems(quantItems + quantity);
    }
  }

  function deleteItem(id, quantity) {
    setCartList(cartList.filter((element) => element.id !== id));

    setQuantItems(quantItems - quantity);
  }

  function deleteCartList() {
    setCartList([]);
    //setQuantItems(0);
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        deleteItem,
        deleteCartList,
        cartList,
        quantItems,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
