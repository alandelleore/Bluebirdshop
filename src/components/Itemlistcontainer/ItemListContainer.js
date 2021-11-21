import './ItemListContainer.css';
import CardContainer from '../CardContainer/CardContainer';

const ItemListContainer = (props) => {
    return (
        <div className="contenedor">
            <h1>{props.greeting}</h1>
            <p>{props.info}</p>
            <CardContainer/>
        </div>
    );
};

export default ItemListContainer;
