import React, { Component } from 'react';
import "../css/RadioButton.css";
export default class RadioBox extends Component {
    render() {
       
        return (
            
        <label class="radio-container"><p>{this.props.text}</p>
            <input type="radio" value={this.props.value}  checked={this.props.checked} name={this.props.radioGroup}/>
            <span class="radio-checkmark"></span>
        </label>
            
        )
    }
}