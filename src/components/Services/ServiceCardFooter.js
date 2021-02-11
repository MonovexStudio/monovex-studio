import React, {Component} from 'react';
import LinkButton from "../LinkButton/LinkButton";
import {Link} from "react-scroll";

class ServiceCardFooter extends Component {
    render() {
        return (
            <div className="services-card-footer">
                <div className="services-card-title">
                    <div className="blob-blue"></div>
                    <h2>{this.props.title}</h2>
                </div>
                <p>{this.props.text}</p>
                <div className="services-card-price">
                    <b>від <span>550₴</span></b>
                    <Link smooth={true} className="btn-link">{"Замовити"}</Link>

                </div>
            </div>
        );
    }
}

export default ServiceCardFooter;