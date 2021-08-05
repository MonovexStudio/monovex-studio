import React, {Component} from 'react';
import ServiceCardFooter from "./ServiceCardFooter";
import MtSvgLines from 'react-mt-svg-lines';
import InViewMonitor from "react-inview-monitor";


class ServiceCard extends Component {
    render() {
        return (
            <div className="services-card">
              

                <img
                className="services-card-img"
                src={this.props.image}/>
                <ServiceCardFooter title={this.props.title} text={this.props.text}/>
            </div>
        );
    }
}

export default ServiceCard;