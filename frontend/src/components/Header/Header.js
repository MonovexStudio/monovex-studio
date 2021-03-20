import React from 'react';
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
    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector("header").style.top = "0";
        } else {
            document.querySelector("header").style.top = "-72px";
        }
        prevScrollpos = currentScrollPos;
    }
    function handleClick(lang) {
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
                    <button onClick={()=>handleClick('uk')}>
                        uk
                    </button>
                    <button onClick={()=>handleClick('ru')}>
                        ru
                    </button>
                    <button onClick={()=>handleClick('en')}>
                        en
                    </button>
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
