import './ItemListContainer.css';


const ItemListContainer = (props) => {
    return (
        <div className="contenedor">
            <h1>{props.greeting}</h1>
            <p>{props.info}</p>
        </div>
    );
};

export default ItemListContainer;
