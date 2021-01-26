import React, {Component} from 'react';
import "../css/Services.css";
import ServiceCard from "./ServiceCard";
import SectionTitle from "./SectionTitle";


class Services extends Component {
    render() {
        return (
            <div className="services">
                <SectionTitle title={"Наші послуги"}/>

                <div className="services-container">
                    <ServiceCard title={"Сайт-візитка"}
                                 text={"Невеликий сайт, що зазвичай складається з однієї або декількох веб-сторінок та містить основну інформацію про організацію, приватну особу, компанію, товари чи послуги, прайс-листи, контактні дані."}/>
                    <ServiceCard title={"Landing Page"}
                                 text={"Невеликий сайт, що зазвичай складається з однієї або декількох веб-сторінок та містить основну інформацію про організацію, приватну особу, компанію, товари чи послуги, прайс-листи, контактні дані."}/>
                    <ServiceCard title={"Інтернет-магазин"}
                                 text={"Невеликий сайт, що зазвичай складається з однієї або декількох веб-сторінок та містить основну інформацію про організацію, приватну особу, компанію, товари чи послуги, прайс-листи, контактні дані."}/>
                </div>
            </div>
        );
    }
}

export default Services;