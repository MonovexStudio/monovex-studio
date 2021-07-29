import React from 'react';
import {Link} from "react-scroll";
import './SideDrawer.css'
import logo from "../../assets/mono-logo.png";
import {NavLink} from "react-router-dom";

const SideDrawer = props => {

    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }

    return(
        <div className={drawerClasses}>
            <div className="side-drawer__logo">
                <img
                    src={logo}
                    className="side-drawer__logo-image"
                    alt="Logo"
                />
            </div>
            <nav className="side-drawer__navigation">
                <NavLink onClick={props.click} to="/" smooth={true} className="side-drawer__navigation-link">Головна</NavLink>
                <Link onClick={props.click} to="services" smooth={true} className="side-drawer__navigation-link">Послуги</Link>
                <NavLink onClick={props.click} to="/brief" smooth={true} className="side-drawer__navigation-link">Бриф</NavLink>
                <Link onClick={props.click} to="portfolio" smooth={true} className="side-drawer__navigation-link">Роботи</Link>
                <Link onClick={props.click} to="contact" smooth={true} className="side-drawer__navigation-link">Замовити</Link>
            </nav>
            <div className="side-drawer__contact">
                <a className="contact-phone" href="tel:0999990999"><span>(</span>+380<span>)</span>-66-587-50-33</a>
                <a className="contact-phone" href="tel:0999990999"><span>(</span>+380<span>)</span>-98-411-89-45</a>
            </div>
        </div>
    )
}
export default SideDrawer;