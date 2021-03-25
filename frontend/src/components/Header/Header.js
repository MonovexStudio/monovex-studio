import React, {useState} from 'react';
import "./Header.css";
import logo from '../../assets/mono-logo.png';
import ToggleButton from '../ToggleButton/ToggleButton'
import {Link} from "react-scroll";
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import CircleIcon from "../CircleIcon/CircleIcon";
import {NavLink} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Header = props => {
    const { t } = useTranslation();
    let prevScrollpos = window.pageYOffset;
    const [language, setLanguage] = useState('uk');

    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        let header = document.querySelector("header")
        if (prevScrollpos > currentScrollPos) {
            header.style.top = "50px";
        } else {
            header.style.top = "-72px";
            header.style.position = "fixed"
        }
        prevScrollpos = currentScrollPos;
    }


    function handleChange(e) {
        let lang = e.target.value
        setLanguage(lang)
        console.log(language)
        i18next.changeLanguage(lang);
    }
    return(
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <NavLink className="brand-image" to="/">
                    <img
                        src={logo}
                        className="header__inner-logo"
                        alt="Logo"
                    />
                    </NavLink>

                    <nav className="header-navigation">
                        <Link to="services" smooth={true} className="header__navigation-link">{t('header-item.1')}</Link>
                        <Link to="motivation" smooth={true} className="header__navigation-link">{t('header-item.2')}</Link>
                        <Link to="reviews" smooth={true} className="header__navigation-link">{t('header-item.3')}</Link>
                        <Link to="portfolio" smooth={true} className="header__navigation-link">{t('header-item.4')}</Link>
                        <Link to="order" smooth={true} className="header__navigation-link">{t('header-item.5')}</Link>
                    </nav>
                    <div className="language">
                        <select value={i18next.ge} onChange={handleChange}>
                            <option value={'uk'}>Українська</option>
                            <option value={'ru'}>Русский</option>
                            <option value={'en'}>English</option>
                        </select>
                    {/*<button onClick={()=>handleClick('uk')}>*/}
                    {/*    uk*/}
                    {/*</button>*/}
                    {/*<button onClick={()=>handleClick('ru')}>*/}
                    {/*    ru*/}
                    {/*</button>*/}
                    {/*<button onClick={()=>handleClick('en')}>*/}
                    {/*    en*/}
                    {/*</button>*/}
                    </div>
                    <div className="header__inner-contact">
                        <a className="contact-phone" href="tel:0999990999"><CircleIcon icon={faPhone}/> &nbsp; 098 411 8945</a>
                        <a className="contact-phone" href="tel:0999990999"><CircleIcon icon={faPhone}/> &nbsp; 098 411 8945</a>
                        {/*<a className="contact-email" href="#">monovex.studio@gmail.com</a>*/}
                    </div>
                    <div className="header__inner-toggle">
                        <ToggleButton click={props.drawerClickHandler} toggle={props.toggle}/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
