import React, { Component } from 'react';
import "../css/PriceSlider.css";


export default class PriceSlider extends Component {
    render() {
        // var slider = document.getElementById("myRange");
        // var output = document.getElementById("demo");
        // output.innerHTML = slider.value; 
        
        // slider.oninput = function() {
        //   output.innerHTML = this.value;
        // }
        return (
            <div class="slidecontainer">
                <input type="range" min="1" max="100" value="30" class="slider" id="myRange"/>
            </div>
        )
    }
}

    