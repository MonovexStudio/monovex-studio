import React, {Component} from 'react';
import './ContactForm.css'
import CustomInputField from "../BriefForm/CustomInputField";
import Button from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";
import BriefForm from "../BriefForm/BriefForm"
import axios from "axios";
import {Link} from "react-router-dom";

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            min: 2200,
            max: 6000,
            disabledSpecific: "disabled",
            disabledApproximate: "",
            disabledDeadline: "",
            titleMessage: "",
            serviceTypeArray: ["Розробка сайту"],
            checkedItems: {
                serviceType: "Не вказано",
                siteType: "Не вказано",
                price: "Не вказано",
                deadline: "Не вказаний",
                credentials: "Не вказано",
                workExample: "Не вказано",
                siteTheme: "Не вказано",
                city: "Не вказано",
                phoneNumber: "Не вказано",
                email: "Не вказано"
            }
        };
    }

    handleSubmit(e){
        e.preventDefault();
        // this.parseServiceType();
        console.log(this.state.checkedItems.serviceType);
        axios.post('/customer/createAndSend', this.state.checkedItems,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response)=>{
                if (response.data.status === 'success') {
                    console.log(response.data);
                    this.resetForm();
                } else if (response.data.status === 'fail') {
                    alert("Message failed to send.");
                }
            })
    }

    setInputValue(event,inputName){
        if(event.target.name===inputName){
            this.setState(prevState=>({
                checkedItems:{
                    ...prevState.checkedItems,
                    [inputName]:event.target.value
                }
            }));
        }
    }

    render() {
        return (
            <section id="reviews" className="contact-form">
                <div className="container">
                    <h3 className="contact-form-title">Контакти</h3>
                    <div className="contact-form__inner">
                        <div className="send-contact-form">
                            <p>Зв'язатись для консультації</p>
                            <div className="input-container">
                                <form className="contactus-form" onSubmit={this.handleSubmit.bind(this)} method="POST">

                                <CustomInputField onChange={event => this.setInputValue(event, "credentials")}
                                                  name="credentials" placeholder="Прізвище та ім'я" type="text" styles={true}/>
                                <CustomInputField onChange={event => this.setInputValue(event, "phoneNumber")}
                                                  name="phoneNumber" placeholder="+380 98 411 89 45" type="text" styles={true}/>
                                <CustomInputField onChange={event => this.setInputValue(event, "email")} name="email"
                                                  placeholder="example@gmail.com" type="email" styles={true}/>
                                <Button text="Відправити"/>
                                </form>
                            </div>
                        </div>
                        <div className="go-to-brief">
                            <p>Вже знаєте чого бажаєте?<br/>Заповніть повну форму і ми вам зателефонуємо</p>
                            <Link to="brief" className="go-to-brief-button">Заповнити</Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactForm;
