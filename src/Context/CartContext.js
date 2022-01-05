import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cartList, setCartList] = useState([]);
  const [quantItems, setQuantItems] = useState(0);
  const [enabled, setEnabled] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [searchEnabled, setSearchEnabled] = useState(false);
  const [magnifyingGlassEnabled, setMagnifyingGlassEnabled] = useState(true);

  const onHandleClickSearch = () => {
    setSearchEnabled(!searchEnabled);
  };

  const onHandleClickCart = () => {
    setTimeout(() => {
      setEnabled(!enabled);
    }, 200);
  };

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
    setTimeout(() => {
      setCartList([]);
    }, 1000);
  }

  const precioTotal = Object.values(cartList).reduce(
    (acc, { quantity, price }) => acc + quantity * price,
    0
  );
  function handleCountUp(count, stock, setCount) {
    if (count >= 0 && count < stock) {
      setCount(count + 1);
    }
  }
  function handleCountDown(count, setCount) {
    if (count >= 1) {
      setCount(count - 1);
    }
  }

  const actBusqueda = (event) => {
    const valor = event.target.value;

    setBusqueda(valor);
  };

  function empyCart() {
    setTimeout(() => {
      setCartList([]);
    }, 500);
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        deleteItem,
        deleteCartList,
        cartList,
        quantItems,
        precioTotal,
        handleCountUp,
        handleCountDown,
        enabled,
        setEnabled,
        onHandleClickCart,
        actBusqueda,
        busqueda,
        setBusqueda,
        searchEnabled,
        setSearchEnabled,
        onHandleClickSearch,
        setCartList,
        empyCart,
        magnifyingGlassEnabled,
        setMagnifyingGlassEnabled,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
