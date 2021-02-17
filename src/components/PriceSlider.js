import React, { Component } from 'react';
import '../css/PriceSlider.css'

import "antd/dist/antd.css";
import { Slider, InputNumber } from "antd";

export default class PriceSlider extends Component {
   
  constructor(props) {
    super(props);
    this.state = {
      min: 2200,
      max: 6000
    };
  }
    onChange = value => {
      if (value[0] < value[1]) {
        this.setState({ min: value[0], max: value[1] });
      }
    };
  
    onChangeMin = value => {
      if (this.state.max > value) {
        this.setState({ min: value });
      }
      return this.state.min;
    };
    onChangeMax = value => {
      if (this.state.min < value) {
        this.setState({ max: value });
      }
    };
   
    render() {
      const { max, min } = this.state;
        return (
            <div className="slider">
             
            <div className="price-input">
            <span className="range-span"> {this.props.textBeforeInput}</span>
            <InputNumber
            className="min-input-main"
            min={0}
            max={14999}
            disabled={this.props.disable}
            value={min}
            onChange={this.onChangeMin}
          />
          <span className="range-span"> {this.props.textCenterInput} </span>
          <InputNumber
            className="max-input-main"
            min={2200}
            max={15000}
            disabled={this.props.disable}
            value={max}
            onChange={this.onChangeMax}
          />
          </div>
          <div className="range-slider">
          <Slider
          disabled={this.props.disable}
          className="slider-main-div"
          min={2200}
          max={15000}
          step={100}
          onChange={this.onChange}
          range={true}
          defaultValue={[min, max]}
          value={[min, max]}
        />
        </div>
          </div>
        )
    }
}

    