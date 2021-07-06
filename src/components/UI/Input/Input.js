import React from 'react';
import './Input.css';

const input = (props) => {
    let inputElement = null;
    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className="InputElement"
                {...props.elementConfig}
                value={props.value} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className="InputElement"
                {...props.elementConfig}
                value={props.value} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className="InputElement"
                    value={props.value}>
                    {props.elementConfig.options.map(op => (
                            <option key={op.value} value={op.value}>
                                {op.displayValue}
                            </option>
                        )
                    )}
                </select>
            );
            break;
        default:
            inputElement = <input
                className="InputElement"
                {...props.elementConfig}
                placeholder={props.placeholder}/>;
    }

    return (
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;