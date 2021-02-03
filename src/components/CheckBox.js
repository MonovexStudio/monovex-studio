import React, { Component } from 'react';
import "../css/CheckBox.css";
export default class CheckBox extends Component {
    
    render() {
       
        return (
            
                <li>
    		<input type="checkbox"  name="checkbox-2" id="checkbox-2"/>
			    <label for="checkbox-2">
				<p>{this.props.text}</p>
			    </label>
			<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
				<path d="M 10 50 L 40 86 L 90 10" stroke="#0f4c75" stroke-dasharray="140" stroke-dashoffset="140"></path>
			</svg>
                </li>
           
            

        // {/* // <label class="checkbox-container">
        // //     <p>{this.props.text}</p>
        // //     <input type="checkbox"/>
        // //     <span class="checkmark"></span>
        // // </label> */}
          
        )
    }
}