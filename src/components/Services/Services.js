import React, {Component} from 'react';
import "./Services.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import website from "../../assets/website.png"
import landing from "../../assets/landing.png"
import eshop from "../../assets/eshop.png"
import Fade from "react-reveal/Fade";
import man from '../../assets/man.png'
import ServiceCard from "../ServiceCard/ServiceCard";


class Services extends Component {
    render() {
        return (
            <div className="services">
                <div className="container">
                    <SectionTitle title={"Наші послуги"}/>
                    <div className="services__inner">
                        <div className="services__inner-left">
                            <img
                                src={man}
                                alt="Man"/>
                            <div className="services__inner-info">
                                <h4>Ми враховуємо всі побажання клієнта та використовуємо гнучкий підхід</h4>
                            </div>
                        </div>
                        <div className="services__inner-right">
                            <ServiceCard number={"1."}
                                         title={"Landing Page"}
                                         price={"2600₴"}
                                         description={"Невеликий сайт, що зазвичай складається з однієї або декількох веб-сторінок та містить основну інформацію про організацію, приватну особу, компанію, товари чи послуги, прайс-листи, контактні дані."}/>
                            <ServiceCard number={"2."}
                                         title={"Сайт-візитка"}
                                         price={"1800₴"}
                                         description={"Невеликий сайт, що зазвичай складається з однієї або декількох веб-сторінок та містить основну інформацію про організацію, приватну особу, компанію, товари чи послуги, прайс-листи, контактні дані."}/>
                            <ServiceCard number={"3."}
                                         title={"Інтернет-магазин"}
                                         price={"4800₴"}
                                         description={"Невеликий сайт, що зазвичай складається з однієї або декількох веб-сторінок та містить основну інформацію про організацію, приватну особу, компанію, товари чи послуги, прайс-листи, контактні дані."}/>
                            <ServiceCard number={"4."}
                                         title={"Промо-сайт"}
                                         price={"2200₴"}
                                         description={"Невеликий сайт, що зазвичай складається з однієї або декількох веб-сторінок та містить основну інформацію про організацію, приватну особу, компанію, товари чи послуги, прайс-листи, контактні дані."}/>
                        </div>
                        {/*<Fade left>
                        <ServiceCard image={website}
                                     title={"Сайт-візитка"}
                                     text={"Невеликий сайт, що зазвичай складається з однієї або декількох веб-сторінок та містить основну інформацію про організацію, приватну особу, компанію, товари чи послуги, прайс-листи, контактні дані."}/>
                    </Fade >
                    </div>
                    <div className="base-container">
                    <Fade bottom delay={750}>
                        <ServiceCard image={landing}
                                     title={"Landing Page"}
                                     text={"Невеликий сайт, що зазвичай складається з однієї або декількох веб-сторінок та містить основну інформацію про організацію, приватну особу, компанію, товари чи послуги, прайс-листи, контактні дані."}/>
                    </Fade >
                    </div>
                    <div className="base-container">
                    <Fade right delay={1500}>
                        <ServiceCard image={eshop}
                                     title={"Інтернет-магазин"}
                                     text={"Невеликий сайт, що зазвичай складається з однієї або декількох веб-сторінок та містить основну інформацію про організацію, приватну особу, компанію, товари чи послуги, прайс-листи, контактні дані."}/>
                    </Fade>*/}
                    </div>
                </div>

            </div>
        );
    }
}

export default Services;