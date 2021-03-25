import React, {useEffect, useState} from 'react';
import "./Header.css";
import logo from '../../assets/mono-logo.png';
import ToggleButton from '../ToggleButton/ToggleButton'
import {Link} from "react-scroll";
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import CircleIcon from "../CircleIcon/CircleIcon";
import {NavLink} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import {debounce} from "../../utilities/helper";

const Header = props => {
    const { t } = useTranslation();
    const [language, setLanguage] = useState('uk');

   /* window.onscroll = function() {
        let curScroll;
        let prevScroll = window.scrollY || document.scrollTop;
        let curDirection = 0;
        let prevDirection = 0;
        let header = document.querySelector("header")
        let toggled;
        let threshold = 200;


        curScroll = window.scrollY || document.scrollTop;
        if(curScroll > prevScroll) {
            // scrolled down
            curDirection = 2;
        }
        else {
            //scrolled up
            curDirection = 1;
        }

        if(curDirection !== prevDirection) {
            toggled = toggleHeader();
        }

        prevScroll = curScroll;
        if(toggled) {
            prevDirection = curDirection;
        }

        var toggleHeader = () => {
            toggled = true;
            if(curDirection === 2 && curScroll > threshold) {
                header.classList.add('hide');
            }
            else if (curDirection === 1) {
                header.classList.remove('hide');
            }
            else {
                toggled = false;
            }
            return toggled;
        };
        /*let currentScrollPos = window.pageYOffset;
        let header = document.querySelector("header")
        if (prevScrollpos > currentScrollPos) {
            header.style.top = "0";
        } else {
            header.style.top = "-72px";
            header.style.position = "fixed"
        }
        prevScrollpos = currentScrollPos;
    }*/

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;

        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

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
    return(
        <header style={{top: visible ? 0 : '-72px'}} className="header">
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
