import React, { Component } from 'react';
import "../css/RadioButton.css";
export default class RadioBox extends Component {
   
   
   
    render() {
       
        return (
            
            <li>
			<input type="radio" checked={this.props.check} value={this.props.value} name={this.props.radioGroup} id={"radio-" + this.props.id}/>
			<label for={"radio-" + this.props.id}>
				{this.props.text}
			</label>
			<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.39,41.27c-2.33.21-3.8,3-3.31,5.26s2.39,4,4.44,5.15c2.48,1.37,5.61,2,8.14.74,
                2.81-1.43,4-4.72,5-7.72.65-2,1.29-4.21.71-6.27-.88-3.09-4.18-4.77-7.26-5.7C43.28,30.37,34.38,
                30.67,27.43,35s-11.35,13-9.32,20.9c1.5,5.82,6.1,10.44,11.34,13.37a31.54,31.54,0,0,0,14.67,4.1c8,
                .16,15.77-3,22.49-7.37a22.24,22.24,0,0,0,6.73-6.14A21.56,21.56,0,0,0,76.22,51c.8-5.66.66-11.69-2-16.75C70.3,
                26.82,61.89,23,53.91,20.35c-8.52-2.88-17.51-5.15-26.44-4S9.66,22.56,6.26,30.89A33.71,33.71,0,0,0,4.25,42a52.68,
                52.68,0,0,0,.81,13.74C7.07,65,12.88,73.22,20,79.62a49,49,0,0,0,14.47,9.32,41.25,41.25,0,0,0,20.67,2.45C67,89.81,
                78.51,82.64,83.25,71.63c4.06-9.44,2.85-20.35,5.88-30.17" stroke="#0f4c75" stroke-dasharray="450" stroke-dashoffset="450"/>
			</svg>
            
		    </li>

        // {/* // <label class="radio-container"><p>{this.props.text}</p>
        // //     <input type="radio" value={this.props.value}  name={this.props.radioGroup}/>
        // //     <span class="radio-checkmark" checked="checked"></span>
        // // </label> */}
            
        )
    }
}