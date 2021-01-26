import React, {Component} from 'react';

class ServiceCardFooter extends Component {
    render() {
        return (
            <div className="services-card-footer">
                <div className="services-card-title">
                    <div className="blob-blue"></div>
                    <h4>{this.props.title}</h4>
                </div>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default ServiceCardFooter;