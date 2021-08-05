import React, {useEffect, useState} from 'react';
import "./Header.css";
import logo from '../../assets/mono-logo.png';
import ToggleButton from '../ToggleButton/ToggleButton'
import {Link} from "react-scroll";
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import CircleIcon from "../CircleIcon/CircleIcon";
import {NavLink} from "react-router-dom";
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import {debounce} from "../../utilities/helper";

const Header = props => {
    const {t} = useTranslation();
    const [language, setLanguage] = useState('uk');

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;

        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 40) || currentScrollPos < 10);

        setPrevScrollPos(currentScrollPos);
    }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);


    function handleChange(e) {
        let lang = e.target.value
        setLanguage(lang)
        console.log(language)
        i18next.changeLanguage(lang);
    }

    return (
        <header style={{top: visible ? 0 : '-68px'}} className="header">
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
                        <NavLink to="/" className="header__navigation-link">{t('header-item.1')}</NavLink>
                        <Link to="services" smooth={true}
                              className="header__navigation-link">{t('header-item.2')}</Link>
                        <Link to="portfolio" smooth={true}
                              className="header__navigation-link">{t('header-item.3')}</Link>
                        <NavLink to="/brief" className="header__navigation-link">{t('header-item.4')}</NavLink>
                        <Link to="contact" smooth={true} className="header__navigation-link">{t('header-item.5')}</Link>

                    </nav>
                    <div className="header-info">
                        {/*<div className="header__inner-language">*/}
                        {/*    <select value={i18next.ge} onChange={handleChange}>*/}
                        {/*        <option value={'uk'}>UA</option>*/}
                        {/*        <option value={'ru'}>RU</option>*/}
                        {/*        <option value={'en'}>EN</option>*/}
                        {/*    </select>*/}
                        {/*</div>*/}
                        <div className="header__inner-contact">
                            <a className="contact-phone" href="tel:0999990999"><CircleIcon icon={faPhone}/> &nbsp; +380 98
                                411-89-45</a>
                            <a className="contact-phone" href="tel:0665875033"><CircleIcon icon={faPhone}/> &nbsp; +380 66
                                587-50-33</a>
                            {/*<a className="contact-email" href="#">monovex.studio@gmail.com</a>*/}
                        </div>
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
