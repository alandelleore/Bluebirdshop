import CartWidget from "../Cartwidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="container">
            <ul>
                <li><a href="#">INICIO</a></li>
                <li><a href="#">QUIÉNES SOMOS?</a></li>
                <li><a href="#">REGISTRATE</a></li>
                <li><a href="#">INGRESÁ</a></li>
                <li><CartWidget/></li>
            </ul>
        </nav>
    );
};

export default NavBar;