import React, { Component } from 'react';
import "../css/CheckBox.css";
export default class CheckBox extends Component {
    render() {
       
        return (
            
        <label class="checkbox-container">
            <p>{this.props.text}</p>
            <input type="checkbox"/>
            <span class="checkmark"></span>
        </label>
          
        )
    }
}