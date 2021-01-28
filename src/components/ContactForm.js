import React, { Component } from 'react';
import "../css/ContactForm.css";
import CheckBox from './CheckBox';
import SectionTitle from './SectionTitle'
import SectionSubtitle from './SectionSubtitle'
import RadioBox from './RadioButton';
import PriceSlider from './PriceSlider'

export default class ContactForm extends Component {
    render() {
       
        return (
            <div className="contact-form">
                <SectionTitle title="Бриф"/>
                {/* ---------------------------------------------- */}
                <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <SectionSubtitle title = "Який вид сайту вас цікавить?*"/>
                </div>
                
                <div className="checkbox-section">
                    <div className="checkbox-block">
                    <CheckBox text="Сайт-Візитка"/>
                    <CheckBox text="Landing page"/>
                    <CheckBox text="Інтернет магазин"/>
                    
                    </div>
                </div>
                </div>
                {/* ----------------------------------------------- */}
                <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <SectionSubtitle title = "Який вид сайту вас цікавить?*"/>
                </div>
                
                <div className="checkbox-section">
                    <div className="checkbox-block">
                    <RadioBox text="Сайт-asdasdasdsadddВізитка"/>
                    <RadioBox text="Lng page"/>
                    <RadioBox text="Інтерddddнет магазин"/>
                    
                    </div>
                </div>
                </div>
                {/* ----------------------------------------------- */}
                <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <SectionSubtitle title = "Який бажаний термін запуску проекту?*"/>
                </div>
                <div className="checkbox-section">
                    <div className="checkbox-block">
                    <PriceSlider/>
                    
                    </div>
                </div>
                </div>
                {/* ----------------------------------------------- */}
            </div>
        )
    }
}