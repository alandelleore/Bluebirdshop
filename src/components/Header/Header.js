import React from 'react';
import './Header.css';
import logo from './bluebird2.png'

//import cualquierCosa from './logo.png';

const Header = (props) => {
    return (
        <div className='Header'>
         <h1>{props.title}</h1>
         <h2>{props.subtitle}</h2>
         <img className='logo' src={logo} alt='logo'/>

        </div>
    );
};
export default Header;