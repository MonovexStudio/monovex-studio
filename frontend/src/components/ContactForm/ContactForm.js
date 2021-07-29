import React, {Component} from 'react';
import './ContactForm.css'
import CustomInputField from "../BriefForm/CustomInputField";
import Button from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";
import BriefForm from "../BriefForm/BriefForm"
import axios from "axios";
import {Link} from "react-router-dom";
import {Notification, NotificationGroup} from "@progress/kendo-react-notification";
import {Slide} from "@progress/kendo-react-animation";

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            error: false,
            min: 2200,
            max: 6000,
            disabledSpecific: "disabled",
            disabledApproximate: "",
            disabledDeadline: "",
            titleMessage: "",
            serviceTypeArray: ["Розробка сайту"],
            checkedItems: {
                credentials: "Не вказано",
                phoneNumber: "Не вказано",
                email: "Не вказано"
            },

        };
    }
    onToggle = (flag) => this.setState({ [flag]: !this.state[flag] });
    handleSubmit(e){
        e.preventDefault();
        // this.parseServiceType();

        axios.post('https://monovex-vlad.herokuapp.com/customer/send', this.state.checkedItems,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(()=> {
                this.onToggle("success");
            }).catch(()=>{
            this.onToggle("error");
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
        const { success, error} = this.state;
        return (
            <section id="contact" className="contact-form">
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
                <NotificationGroup
                    style={{
                        right: 20,
                        bottom: 20,
                        alignItems: "flex-start",
                        flexWrap: "wrap-reverse",
                    }}
                >
                    <Slide direction={success ? "up" : "down"}>
                        {success && (
                            <Notification
                                type={{ style: "success", icon: true }}
                                closable={true}
                                onClose={() => this.setState({ success: false })}
                            >
                                <span className="success-message">Вашу заявку надіслано</span>
                            </Notification>
                        )}
                    </Slide>
                    <Slide direction={error ? "up" : "down"}>
                        {error && (
                            <Notification
                                type={{ style: "error", icon: true }}
                                closable={true}
                                onClose={() => this.setState({ error: false })}
                            >
                                <span>Помилка! Повторіть спробу через декілька хвилин</span>
                            </Notification>
                        )}
                    </Slide>
                </NotificationGroup>
            </section>

        );
    }
}

export default ContactForm;
