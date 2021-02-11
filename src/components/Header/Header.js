import React from 'react';
import "./Header.css";
import logo from '../../assets/mono-logo.png';
import ToggleButton from '../ToggleButton/ToggleButton'
import {Link} from "react-scroll";

const Header = props => (
    <header className="header">
        <div className="container">
            <div className="header__inner">
                <img
                    src={logo}
                    className="header__inner-logo"
                    alt="Logo"
                />
                <nav className="header-navigation">
                    <Link className="header__navigation-link">Послуги</Link>
                    <Link className="header__navigation-link">Переваги</Link>
                    <Link className="header__navigation-link">Відгуки</Link>
                    <Link className="header__navigation-link">Наші проекти</Link>
                    <Link className="header__navigation-link">Замовити</Link>
                </nav>
                <div className="header__inner-contact">
                    <a className="contact-phone" href="tel:0999990999"><span>(</span>+380<span>)</span>-999-09-99</a>
                    <a className="contact-phone" href="tel:0999990999"><span>(</span>+380<span>)</span>-999-09-99</a>
                    {/*<a className="contact-email" href="#">monovex.studio@gmail.com</a>*/}
                </div>
                <div className="header__inner-toggle">
                    <ToggleButton click={props.drawerClickHandler} toggle={props.toggle}/>
                </div>
            </div>
        </div>
    </header>

)

export default Header;
