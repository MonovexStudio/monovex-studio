import React, { Component } from 'react';
import "../css/Button.css";
export default class Button extends Component {
    render() {
       
        return (
            <button onClick={this.props.onClick} className="standart-btn">{this.props.text} </button>
        )
    }
}