import './CartWidget.css'
import imagen from './carrito.png';

const CartWidget = () => {
    return (
        <div>
            <img src={imagen} alt='logo'/>
        </div>
    )
}

export default CartWidget;