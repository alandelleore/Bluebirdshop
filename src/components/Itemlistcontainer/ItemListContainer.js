import "./ItemListContainer.css";
import CardContainer from "../CardContainer/CardContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const ItemListContainer = (props) => {
  return (
    <div className="contenedor">
      <h1>{props.greeting}</h1>
      <p>{props.info}</p>
      <CardContainer />
      <ItemDetailContainer />
    </div>
  );
};

export default ItemListContainer;
