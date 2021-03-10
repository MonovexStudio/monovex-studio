import React, { Component } from 'react';
import './PriceSlider.css'

import "antd/dist/antd.css";
import { Slider, InputNumber } from "antd";

export default class PriceSlider extends Component {
   
  constructor(props) {
    super(props);
    
  }
   
   
    render() {
      
        return (
            <div className="slider">
             
            <div className="price-input">
            <span className="range-span"> {this.props.textBeforeInput}</span>
            <InputNumber
            className="min-input-main"
            min={0}
            max={14999}
            disabled={this.props.disable}
            value={this.props.min}
            onChange={this.props.onChangeMin}
          />
          <span className="range-span"> {this.props.textCenterInput} </span>
          <InputNumber
            className="max-input-main"
            min={2200}
            max={15000}
            disabled={this.props.disable}
            value={this.props.max}
            onChange={this.props.onChangeMax}
          />
          </div>
          <div className="range-slider">
          <Slider
          disabled={this.props.disable}
          className="slider-main-div"
          min={2200}
          max={15000}
          step={100}
          onChange={this.props.onChange}
          range={true}
          defaultValue={[this.props.min, this.props.max]}
          value={[this.props.min, this.props.max]}
        />
        </div>
          </div>
        )
    }
}

    