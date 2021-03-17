import React, {Component} from 'react';
import "./RadioButton.css";

export default class RadioBox extends Component {


    render() {

        return (
            <div className="radio-container">
                <li>
                    <input type="radio" defaultChecked={this.props.checked} value={this.props.value}
                           name={this.props.radioGroup} id={"radio-" + this.props.id}/>
                    <label for={"radio-" + this.props.id}>
                        {this.props.text}
                    </label>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45 57"/>
                        <circle cx="50%" cy="50%" r="42" stroke="#005cbf" stroke-width="5"/>

                        <circle cx="50%" cy="50%" r="25" stroke="#005cbf" stroke-width="20" stroke-dasharray="450"
                                stroke-dashoffset="450"/>
                    </svg>
                </li>
            </div>


        )
    }
}