import React, {Component} from 'react';
import "../css/Services.css";
import ServiceCard from "./ServiceCard";
import SectionTitle from "./SectionTitle";
import website from "../assets/website.png"
import landing from "../assets/landing.png"
import eshop from "../assets/eshop.png"
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import Fade from "react-reveal/Fade";


class Services extends Component {
    render() {
        return (
            <div className="services">
                <SectionTitle title={"Наші послуги"}/>
                <div className="services-container">
                    <Fade left>
                        <ServiceCard image={website}
                                     title={"Сайт-візитка"}
                                     text={"Невеликий сайт, що зазвичай складається з однієї або декількох веб-сторінок та містить основну інформацію про організацію, приватну особу, компанію, товари чи послуги, прайс-листи, контактні дані."}/>
                    </Fade>
                    <Fade bottom>
                        <ServiceCard image={landing}
                                     title={"Landing Page"}
                                     text={"Невеликий сайт, що зазвичай складається з однієї або декількох веб-сторінок та містить основну інформацію про організацію, приватну особу, компанію, товари чи послуги, прайс-листи, контактні дані."}/>
                    </Fade>
                    <Fade right>
                        <ServiceCard image={eshop}
                                     title={"Інтернет-магазин"}
                                     text={"Невеликий сайт, що зазвичай складається з однієї або декількох веб-сторінок та містить основну інформацію про організацію, приватну особу, компанію, товари чи послуги, прайс-листи, контактні дані."}/>
                    </Fade>
                </div>
            </div>
        );
    }
}

export default Services;