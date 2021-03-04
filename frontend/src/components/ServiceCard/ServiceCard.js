import React from 'react';
import './ServiceCard.css'
import LinkButton from "../LinkButton/LinkButton";

const ServiceCard = props => (
    <div className="service-card1">
        <div className="ribbon ribbon-top-right">
            <span>{props.price}</span>
        </div>
        <div className="services-card-container">
            <div className="service-card-title">
                <span>{props.number}</span>
                <h3>{props.title}</h3>
            </div>
            <div className="services-card-body">
                <p>{props.description}</p>
            </div>
            <div className="services-card-footer1">
                <LinkButton text={"Замовити"}/>
            </div>
        </div>
    </div>
)
export default ServiceCard;