import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll/modules";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";
import FooterMenu from './FooterMenu';
import './Footer.css'
import logo from '../../assets/mono-logo.png'
import lamp from '../../assets/ml.png'
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import CustomInputField from "../BriefForm/CustomInputField";
import Button from "../Button/Button";
function Footer (props) {
    const footerMenuContent = <React.Fragment>
        <Link to="about" smooth={true} className="footer__navigation-link">Головна</Link>
        <Link to="group" smooth={true} className="footer__navigation-link">Послуги</Link>
        <Link to="contact" smooth={true} className="footer__navigation-link">Роботи</Link>
    </React.Fragment>;
    const footerMenuContact = <React.Fragment>
        <Link to="contact" smooth={true} className="footer__navigation-link">Бриф</Link>
        <Link to="contact" smooth={true} className="footer__navigation-link">Замовити</Link>
    </React.Fragment>;
    const footerMenuSocial = <React.Fragment>
        <h3 className="footer-email">monovex.studio@gmail.com</h3>
        <div className="social-menu">
            <a target="_blank" href="http://instagram.com"> <FontAwesomeIcon size="3x" icon={faInstagram} /></a>
            <a target="_blank" href="http://facebook.com"> <FontAwesomeIcon size="3x" icon={faFacebookF} /></a>
            <a target="_blank" href="http://youtube.com"> <FontAwesomeIcon size="3x" icon={faYoutube} /></a>
        </div>
        </React.Fragment>;
        return (
            <footer className="footer">
                <div className="footer-top">

                    <div className="footer-send-contact-form">
                        <p>Зв'язатись для консультації</p>
                        <div className="footer-input-container">
                            <form className="footer-contactus-form" method="POST">
                                <div className="footer-input-field-container">
                                <CustomInputField name="credentials" placeholder="Ім'я" type="text" styles="footer"/>
                                <CustomInputField name="phoneNumber" placeholder="+380 98 411 89 45" type="text" styles="footer"/>
                                </div>
                                <Button text="Відправити"/>
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
                        <p className="footer-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at culpa cupiditate doloribus eos excepturi facere, ipsum laboriosam laborum maiores nesciunt, placeat, quaerat repellat rerum sapiente sed vitae? Magni, quae?lorem</p>
                    </NavLink>
                    <FooterMenu className="footer-menu" content={footerMenuContent}/>
                    <FooterMenu className="footer-menu" content={footerMenuContact}/>
                    <FooterMenu className="footer-menu" content={footerMenuSocial} title="Соц. мережі"/>
                </div>
            </footer>
        );

}

export default Footer;