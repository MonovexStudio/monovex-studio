import React from 'react';
import "./Button.css";

const Button = props => (
    <button className="standart-btn" disabled={props.disabled} onClick={props.onClick} type={props.type}>{props.text} </button>
)

export default Button;