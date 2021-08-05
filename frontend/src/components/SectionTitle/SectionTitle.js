import React from 'react';
import "./SectionTitle.css";


const SectionTitle = props => (
    <div className="title-container">
        <div className="title-line"></div>
        <h2 className="title">{props.title}</h2>
        <h2 style={props.style} className="title">{props.title}</h2>
    </div>
)
export default SectionTitle;