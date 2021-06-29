import React from 'react';
import './Modal.css';

const modal = (props) => (
    <div
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}
        className="Modal"
    >
        {props.children}
    </div>

);

export default modal;