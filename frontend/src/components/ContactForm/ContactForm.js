import React, {Component} from 'react';
import './ContactForm.css'
import CustomInputField from "../BriefForm/CustomInputField";
import Button from "../Button/Button";
import axios from "axios";
import {Link} from "react-router-dom";
import {Notification, NotificationGroup} from "@progress/kendo-react-notification";
import {Slide} from "@progress/kendo-react-animation";
import { withTranslation } from 'react-i18next';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            error: false,
            loading: false,
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
        this.setState({loading:true});
        axios.post('https://monovex-production.herokuapp.com/customer/send', this.state.checkedItems,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(()=> {
                this.onToggle("success");
                this.setState({loading:false});
            }).catch(()=>{
            this.onToggle("error");
            this.setState({loading:false});
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
        const { success, error, loading} = this.state;
        return (
            <section id="contact" className="contact-form">
                <div className="container">
                    <h3 className="contact-form-title">{this.props.t('contact.0')}</h3>
                    <div className="contact-form__inner">
                        <div className="send-contact-form">
                            <p>{this.props.t('contact.1')}</p>
                            <div className="input-container">
                                <form className="contactus-form" onSubmit={this.handleSubmit.bind(this)} method="POST">

                                <CustomInputField onChange={event => this.setInputValue(event, "credentials")}
                                                  name="credentials" placeholder={this.props.t('contact.2')} type="text" styles={true}/>
                                <CustomInputField onChange={event => this.setInputValue(event, "phoneNumber")}
                                                  name="phoneNumber" placeholder="+380 98 411 89 45" type="text" styles={true}/>
                                <CustomInputField onChange={event => this.setInputValue(event, "email")} name="email"
                                                  placeholder="example@gmail.com" type="email" styles={true}/>
                                <Button disabled={this.state.loading} text={this.props.t('contact.6')}/>
                                </form>
                            </div>
                        </div>
                        <div className="go-to-brief">
                            <p>{this.props.t('contact.3')}<br/>{this.props.t('contact.4')}</p>
                            <Link to="brief" className="go-to-brief-button">{this.props.t('contact.5')}</Link>
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
                    <Slide direction={loading ? "up" : "down"}>
                        {loading && (
                            <Notification
                                type={{ style: "info", icon: true }}
                                closable={true}
                                onClose={() => this.setState({ loading: false })}
                            >
                                <span>Надсилання інформації</span>
                            </Notification>
                        )}
                    </Slide>
                </NotificationGroup>
            </section>

        );
    }
}

export default withTranslation()(ContactForm);
