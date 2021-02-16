import React from 'react';
import './CircleIcon.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CircleIcon = props => (
    <div className="circle-icon">
        <FontAwesomeIcon icon={props.icon}/>
    </div>
)
export default CircleIcon;