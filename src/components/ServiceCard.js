import React, {Component} from 'react';
import ServiceCardFooter from "./ServiceCardFooter";
import logo from "../assets/computer.jpg"

class ServiceCard extends Component {
    render() {
        return (
            <div className="services-card">
                <img
                className="services-card-img"
                src={logo}/>
                <ServiceCardFooter title={this.props.title} text={this.props.text}/>
            </div>
        );
    }
}

export default ServiceCard;