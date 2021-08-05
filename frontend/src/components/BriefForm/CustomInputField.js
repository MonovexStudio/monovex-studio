import React, { Component } from 'react';
import "./CustomInputField.css";

export default class CustomInputField extends Component {

    render() {
        let classes = 'custom-input-field'
        if(this.props.styles){
            classes += ' white-style'
        }
        if(this.props.styles==="footer"){
            classes += ' footer-style'
        }
        return (
            <input className={classes} onChange={this.props.onChange} name={this.props.name} onFocus={this.props.onfocus} disabled = {this.props.disabled} placeholder={this.props.placeholder} type={this.props.type} />
        )
    }
}
