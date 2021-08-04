import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

import {Link} from "react-scroll/modules";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faTelegramPlane, faFoursquare} from "@fortawesome/free-brands-svg-icons";
import FooterMenu from './FooterMenu';
import './Footer.css'
import logo from '../../assets/mono-logo.png'
import lamp from '../../assets/ml.png'
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import CustomInputField from "../BriefForm/CustomInputField";
import Button from "../Button/Button";
import axios from "axios";
import {Notification, NotificationGroup} from "@progress/kendo-react-notification";
import { Slide } from "@progress/kendo-react-animation";

class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            error: false,
            loading: false,
            checkedItems: {
                credentials: "Не вказано",
                phoneNumber: "Не вказано"
            }
        };

    }
    onToggle = (flag) => this.setState({ [flag]: !this.state[flag] });
    handleSubmit(e){
        this.setState({loading:true});
        e.preventDefault();
        // this.parseServiceType();

        axios.post('https://monovex-production.herokuapp.com/customer/send', this.state.checkedItems,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(()=> {
            this.onToggle("success");
            this.setState({loading:false});
        })
            .catch(()=>{
                    this.onToggle("error");
                this.setState({loading:false});
            })

    }
    setLoading(){

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
    let btnClasses = 'btn-send-consult'

    const { success, error, loading} = this.state;
    const footerMenuContent = <React.Fragment>
        <NavLink to="/" smooth={true} className="footer__navigation-link">Головна</NavLink>
        <Link to="services" smooth={true} className="footer__navigation-link">Послуги</Link>
        <Link to="portfolio" smooth={true} className="footer__navigation-link">Роботи</Link>
    </React.Fragment>;
    const footerMenuContact = <React.Fragment>
        <NavLink to="/brief" smooth={true} className="footer__navigation-link">Бриф</NavLink>
        <Link to="contact" smooth={true} className="footer__navigation-link">Замовити</Link>
    </React.Fragment>;
    const footerMenuSocial = <React.Fragment>
        <h3 className="footer-email">monovex.studio@gmail.com</h3>
        <div className="social-menu">
            <a target="_blank" href="https://t.me/monovex"> <FontAwesomeIcon size="3x" icon={faTelegramPlane} /></a>
            <a target="_blank" href="https://www.facebook.com/monovex"> <FontAwesomeIcon size="3x" icon={faFacebookF} /></a>
            <a target="_blank" href="https://freelance.ua/user/monovexstudio/portfolio/"> <FontAwesomeIcon size="3x" icon={faFoursquare} /></a>
        </div>
    </React.Fragment>;
    return (
        <footer className="footer">
            <div className="footer-top">

                <div className="footer-send-contact-form">
                    <p>Зв'язатись для консультації</p>
                    <div className="footer-input-container">
                        <form className="footer-contactus-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div className="footer-input-field-container">
                                <CustomInputField onChange={event => this.setInputValue(event, "credentials")} name="credentials" placeholder="Ім'я" type="text" styles="footer"/>
                                <CustomInputField onChange={event => this.setInputValue(event, "phoneNumber")} name="phoneNumber" placeholder="+380 98 411 89 45" type="text"
                                                  styles="footer"/>
                            </div>
                            <button disabled={this.state.loading} className={btnClasses}>
                                Відправити
                            </button>

                        </form>
                    </div>
                </div>

                <div className="footer-main-image">
                    <img
                        src={lamp}
                        className="footer__inner-image"
                        alt="Logo"
                        width="200px"
                        height="200px"
                    />
                </div>

            </div>
            <div className="footer-main">
                <NavLink className="footer-brand-image" to="/">
                    <img
                        src={logo}
                        className="footer__inner-logo"
                        alt="Logo"
                        width="200px"
                        height="60px"
                    />
                    <h2 className="footer-title">Професійне створення сайтів</h2>
                    <p className="footer-title">Ми пропонуємо ефективні комплексні рішення - від концепції, стратегії та
                        проектування до розробки, впровадження та підтримки. Допомагаємо компаніям досягнути успіху та поставлених цілей.</p>
                </NavLink>
                <FooterMenu className="footer-menu" content={footerMenuContent}/>
                <FooterMenu className="footer-menu" content={footerMenuContact}/>
                <FooterMenu className="footer-menu" content={footerMenuSocial} title="Соц. мережі"/>
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
        </footer>
    );
}
}

export default Footer;
