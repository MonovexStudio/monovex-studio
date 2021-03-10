import React from 'react';
import './SliderCard.css'

const SliderCard = props => (
    <div className="slider-item">
        <img
            src={props.image}
            className=""
            alt="Logo"
        />
        <div className="slider-title">
            <div className="blob-blue"></div>
            <h3>{props.title}</h3>
        </div>
        <p>{props.text}</p>
    </div>
)
export default SliderCard;