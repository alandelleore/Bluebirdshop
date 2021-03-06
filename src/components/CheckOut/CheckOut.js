import React, { useState } from "react";

import "../../views/views.css";
import "./CheckOut.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import MessageSuccess from "../MessageSuccess/MessageSuccess";
//import { CartContext } from "../../Context/CartContext";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  adress: "",
};

const CheckOut = () => {
  const [values, setValues] = useState(initialState);
  const [loader, setLoader] = useState(false);
  const [purchaseID, setPurchaseId] = useState("");
  const [isEnabled, setIsEnable] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    setLoader(true);
    setValues(initialState);
    e.preventDefault();

    const docRef = await addDoc(collection(db, "purchases"), {
      values,
    });
    setPurchaseId(docRef);
    setTimeout(() => {
      setLoader(false);
      setIsEnable(!isEnabled);
      //deleteCartList();
    }, 1000);
  };

  return (
    <div>
      <div className={isEnabled ? "off" : "on"}>
        <h2 className="titulo">Finalizar Compra</h2>
        <form className="form-container " onSubmit={onSubmitHandler}>
          <input
            placeholder="Nombre"
            name="name"
            type="text"
            value={values.name}
            onChange={onChangeHandler}
          ></input>
          <input
            placeholder="Apellido"
            name="lastName"
            type="text"
            value={values.lastName}
            onChange={onChangeHandler}
          ></input>
          <input
            placeholder="Email"
            required
            type="email"
            name="email"
            value={values.email}
            onChange={onChangeHandler}
          ></input>
          <input
            placeholder="Dirección"
            name="adress"
            value={values.adress}
            onChange={onChangeHandler}
          ></input>
          <button className="btn-comprar">Enviar Pedido</button>
        </form>
      </div>
      {loader ? (
        <div>
          <p className="load-form">Cargando...</p>
        </div>
      ) : (
        purchaseID.id && (
          <div>
            <MessageSuccess msg={purchaseID} />
          </div>
        )
      )}
    </div>
  );
};

export default CheckOut;
