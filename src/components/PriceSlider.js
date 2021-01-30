import React, { Component } from 'react';
import '../css/PriceSlider.css'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';


export default class PriceSlider extends Component {
    // onChange = range => {
    //     this.props.onChange({
    //       type: this.props.data.label,
    //       value: range
    //     });
    //   }
    
    constructor(props) {
        super(props);
    
        this.state = {
          value5: {
            min: 2200,
            max: 10000,
            step: 100,
          }
        };
      }
    render() {
        
        return (
            <div className="slider">
              <div className="price-input">
            <input type="number" value={this.state.value5.min} className = "from-price-input"/>
            <input type="number" value={this.state.value5.max} className = "to-price-input"/>
            </div>
            
            <InputRange
              draggableTrack
              maxValue={50000}
              minValue={0}
              step={this.state.value5.step}
             
              value={this.state.value5}
              onChange={value => this.setState({ value5: value })}
              onChangeComplete={value => console.log(value)} />
          </div>
        )
    }
}

    