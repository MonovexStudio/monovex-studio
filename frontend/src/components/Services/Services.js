import React from 'react';
import "./Services.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import tablet from '../../assets/tablet3.jpg'
import ServiceCard from "../ServiceCard/ServiceCard";
import { withTranslation } from 'react-i18next';

const Services =(props)=> {
        return (
            <section id="services" className="services">
                <div className="container">
                    <SectionTitle title={props.t('service-card-titles.0')}/>
                    <div className="services__inner">
                        <div className="services__inner-left">

                            <img
                                src={tablet}
                                alt="Man"
                            />


                        </div>
                        <div className="services__inner-right">
                            <ServiceCard number={"1."}
                                         title={"Landing Page"}
                                         price={"3500₴"}
                                         description={props.t('service-card-description.1')}/>
                            <ServiceCard number={"2."}
                                         title={props.t('service-card-titles.2')}
                                         price={"3600₴"}
                                         description={props.t('service-card-description.2')}/>

                            <ServiceCard number={"3."}
                                         title={props.t('service-card-titles.3')}
                                         price={"2700₴"}
                                         description={props.t('service-card-description.3')}/>
                            <ServiceCard number={"4."}
                                         title={props.t('service-card-titles.4')}
                                         price={"7900₴"}
                                         description={props.t('service-card-description.4')}/>
                               </div>

                    </div>
                </div>

            </section>
        );
}

export default withTranslation()(Services);