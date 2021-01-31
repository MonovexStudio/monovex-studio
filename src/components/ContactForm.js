import React, { Component } from 'react';
import "../css/ContactForm.css";
import CheckBox from './CheckBox';
import SectionTitle from './SectionTitle'
import SectionSubtitle from './SectionSubtitle'
import RadioBox from './RadioButton';
import PriceSlider from './PriceSlider'
import CustomInputField from './CustomInputField'

export default class ContactForm extends Component {
    state = {
        disabledSpecific: "disabled",
        disabledApproximate: "disabled"
      };

    setTypeOfAmount(event){
        console.log(typeof event.target.value);
        if(event.target.value==="specific")
        {
            console.log(event.target.value);
            this.setState({disabledSpecific:""});
            this.setState({disabledApproximate:"disabled"});
        }
        else if(event.target.value==="approximate"){
            this.setState({disabledSpecific:"disabled"});
            this.setState({disabledApproximate:""});
        }
        
       
            
    }

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
                    <RadioBox radioGroup="1"  text="Сайт-asdasdasdsadddВізитка"/>
                    <RadioBox radioGroup="1" text="Lng page"/>
                    <RadioBox radioGroup="1" text="Інтерddddнет магазин"/>
                    
                    </div>
                </div>
                </div>
                {/* ----------------------------------------------- */}
                <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <SectionSubtitle title = "Який бажаний термін запуску проекту?*"/>
                </div>
                <div className="checkbox-section">
                    <div onChange={event => this.setTypeOfAmount(event) } className="price-slider-block">
                        
                    <RadioBox  value="approximate"  radioGroup="2" text="Приблизно (грн)"/>
                    
                    <PriceSlider disable={this.state.disabledApproximate} textBeforeInput = "від" textCenterInput = "до"/>
                    
                    <RadioBox value="specific"  radioGroup="2" text="Конкретна сума"/>
                    <CustomInputField disabled={this.state.disabledSpecific} placeholder="Конкретна сума (2200)" type="number"/>
                   
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
                    <CheckBox text="Сайт-Візитка"/>
                    <CheckBox text="Landing page"/>
                    <CheckBox text="Інтернет магазин"/>
                    
                    </div>
                </div>
                </div>
                {/* ------------------------------------------------------ */}
            </div>
        )
    }
}