import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope it tastes well!</h1>
            <div>
                <div style={{ width: '100%', margin: 'auto' }}>
                    <Burger ingredients={props.ingredients} />
                </div>
                <Button btnType="Danger"
                    clicked>
                    CANCEL
                </Button>
                <Button
                    btnType="Success"
                    clicked>
                    CONTINUE
                </Button>
            </div >
        </div>
    )
}

export default checkoutSummary;