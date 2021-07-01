import React from 'react';
import logo from '../assets/images/burger-logo.png';
import './Logo.css';

const Logo = (props) => (
    <div className="Logo">
        <img src={logo} alt="Burger Builder" />
    </div>
);

export default Logo;