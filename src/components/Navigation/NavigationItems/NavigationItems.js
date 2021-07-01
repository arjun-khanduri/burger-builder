import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/" active>Checkout</NavigationItem>
    </ul>
);

export default navigationItems;