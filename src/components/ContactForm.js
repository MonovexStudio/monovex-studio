import React, { Component } from 'react';
import "../css/ContactForm.css";
import CheckBox from './CheckBox';
import SectionTitle from './SectionTitle'
import SectionSubtitle from './SectionSubtitle'
import RadioBox from './RadioButton';
import PriceSlider from './PriceSlider'
import CustomInputField from './CustomInputField'
import Button from './Button'

export default class ContactForm extends Component {
    state = {
        disabledSpecific: "disabled",
        disabledApproximate: "disabled",
        disabledDeadline: "disabled"
      };

      setDeadlineDate(event){
        if(event.target.value==="specificDeadline")
        {
            this.setState({disabledDeadline:""});
        }
        else if (event.target.value === "approximateDeadline"){
            this.setState({disabledDeadline:"disabled"});
        }
            
      }
    
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
                    <SectionSubtitle title = "Яка послуга вас цікавить?"/>
                </div>
                
                <div className="box-section">
                    <div className="box-block checkbox">
                    <CheckBox text="Розробка сайту"/>
                    <CheckBox text="Обслуговування сайту"/>
                    <CheckBox text="Доповнення вже готового сайту"/>
                    <CheckBox text="Розробка мобільного додатку"/>
                    </div>
                </div>
                </div>
                {/* ----------------------------------------------- */}
                <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <SectionSubtitle title = "Який вид сайту вас цікавить?"/>
                </div>
                
                <div className="box-section">
                    <div className="box-block radiobox">
                    <RadioBox radioGroup="1"  text="Сайт-Візитка"/>
                    <RadioBox radioGroup="1" text="Landing page"/>
                    <RadioBox radioGroup="1" text="Персональний"/>
                    <RadioBox radioGroup="1"  text="Корпоративний"/>
                    <RadioBox radioGroup="1" text="Каталог"/>
                    
                    
                    </div>
                </div>
                </div>
                {/* ----------------------------------------------- */}
                <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <SectionSubtitle title = "Яку суму ви маєте на розробку сайту?"/>
                </div>
                <div className="box-section">
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
                    <SectionSubtitle title = "Який бажаний термін запуску проекту?"/>
                </div>
                
                <div className="box-section">
                    <div onChange={event => this.setDeadlineDate(event) } className="box-block radiobox">
                        
                    <RadioBox value="approximateDeadline" radioGroup="3" text="Терміново"/>
                    <RadioBox value="specificDeadline" radioGroup="3" text="Необхідно зробити до:"/>
                        
                    <CustomInputField disabled={this.state.disabledDeadline} placeholder="Дата дедлайну" type="text"/>
                    <RadioBox value="approximateDeadline" radioGroup="3"  text="Не поспішаємо"/>
                    
                        
                    </div>
                    
                </div>
                </div>
                {/* ------------------------------------------------------ */}
                <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <SectionSubtitle title = "Контактна особа (П.І.Б.)"/>
                </div>
                
                <div className="box-section">
                    <div className="box-block input">
                    <CustomInputField placeholder="Маск Илон Петрович" type="text"/>
                    </div>
                    
                </div>
                </div>
                {/* ------------------------------------------------------ */}
                <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <SectionSubtitle title = "Приклад роботи який вам подобається"/>
                </div>
                
                <div className="box-section">
                    <div className="box-block input">
                    <CustomInputField  placeholder="https://www.google.com/" type="text"/>
                    </div>
                    
                </div>
                </div>
                 {/* ------------------------------------------------------ */}
                 <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <SectionSubtitle title = "Тематика майбутнього сайту"/>
                </div>
                
                <div className="box-section">
                    <div className="box-block input">
                    <CustomInputField  placeholder="Доставка смачненького" type="text"/>
                    </div>
                    
                </div>
                </div>
                {/* ------------------------------------------------------ */}
                <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <SectionSubtitle title = "Тематика майбутнього сайту"/>
                </div>
                
                <div className="box-section">
                    <div className="box-block input">
                    <CustomInputField  placeholder="Доставка смачненького" type="text"/>
                    </div>
                    
                </div>
                </div>
                {/* ------------------------------------------------------ */}

                <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <SectionSubtitle title = "Місто"/>
                </div>
                
                <div className="box-section">
                    <div className="box-block input">
                    <CustomInputField  placeholder="Львів" type="text"/>
                    </div>
                    
                </div>
                </div>
                 {/* ------------------------------------------------------ */}
                <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <SectionSubtitle title = "Номер телефону"/>
                </div>
                
                <div className="box-section">
                    <div className="box-block input">
                    <CustomInputField  placeholder="38 (073) 413 12 02" type="text"/>
                    </div>
                    
                </div>
                </div>
                 {/* ------------------------------------------------------ */}
                <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <SectionSubtitle title = "Ваш e-mail"/>
                </div>
                
                <div className="box-section">
                    <div className="box-block input">
                    <CustomInputField  placeholder="Доставка смачненького" type="email"/>
                    </div>
                    
                </div>
                </div>

                <Button text="Відправити"/>


            </div>
        )
    }
}