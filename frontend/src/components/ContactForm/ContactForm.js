import React, {Component} from 'react';
import './ContactForm.css'
import CustomInputField from "../BriefForm/CustomInputField";
import Button from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";
import BriefForm from "../BriefForm/BriefForm"

class ContactForm extends Component {
    render() {
        return (
            <section id="reviews" className="contact-form">
                <div className="container">
                    <h3 className="contact-form-title">Контакти</h3>
                    <div className="contact-form__inner">

                        <div className="send-contact-form">
                            <p>Зв'язатись для консультації</p>
                            <div className="input-container">
                            <CustomInputField placeholder="Ім'я" type="text"/>
                            <CustomInputField placeholder="+380 98 411 89 45" type="text"/>
                            <CustomInputField placeholder="example@gmail.com" type="email"/>
                            <Button text="Відправити"/>
                            </div>
                        </div>
                        <div className="go-to-brief">
                            <p>Вже знаєте чого бажаєте?<br/>Заповніть повну форму і ми вам зателефонуємо</p>
                            <button className="go-to-brief-button">Заповнити</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactForm;