import React from 'react';
import './Order.css';

const order = (props) => {
    const ingredients = [];

    for (let ingredient in props.ingredients) {
        ingredients.push(
            {
                name: ingredient,
                amount: props.ingredients[ingredient]
            }
        );
    }

    const ingredientOutput = ingredients.map(ing => {
        return <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={ing.name}>
            {ing.name} ({ing.amount})
        </span>
    })

    return (
        <div className='Order'>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>{Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
};

export default order;