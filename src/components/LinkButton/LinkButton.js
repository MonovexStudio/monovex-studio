import React, {Component} from 'react';
import {Link} from "react-scroll";
import "./LinkButton.css";


const LinkButton = props => (
    <Link to={props.link} smooth={true} className="btn-link">{props.text}</Link>
)
export default LinkButton;