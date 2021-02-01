import React, { Component } from 'react';
import "../css/CustomInputField.css";

export default class CustomInputField extends Component {
    
    render() {
        
        return (
            <input className="custom-input-field" disabled = {this.props.disabled} placeholder={this.props.placeholder} type={this.props.type} />
        )
    }
}