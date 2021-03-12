import React from 'react';
import "./Header.css";
import logo from '../../assets/mono-logo.png';
import ToggleButton from '../ToggleButton/ToggleButton'
import {Link} from "react-scroll";
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import CircleIcon from "../CircleIcon/CircleIcon";


const Header = props => {
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
    return(
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <img
                        src={logo}
                        className="header__inner-logo"
                        alt="Logo"
                    />
                    <nav className="header-navigation">
                        <Link to="services" smooth={true} className="header__navigation-link">Послуги</Link>
                        <Link to="motivation" smooth={true} className="header__navigation-link">Переваги</Link>
                        <Link to="reviews" smooth={true} className="header__navigation-link">Відгуки</Link>
                        <Link to="portfolio" smooth={true} className="header__navigation-link">Наші проекти</Link>
                        <Link to="order" smooth={true} className="header__navigation-link">Замовити</Link>
                    </nav>
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
