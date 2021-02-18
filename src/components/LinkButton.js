import React, {Component} from 'react';
import {Link} from "react-scroll";
import "../css/LinkButton.css";


class LinkButton extends Component {
    render() {
        return (
            <Link to={this.props.link} smooth={true} className="btn-link" type={this.props.type}>{this.props.text}</Link>
        );
    }
}

export default LinkButton;