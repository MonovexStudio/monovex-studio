import React, {Component} from 'react';
import './FooterMenu.css'
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
function FooterMenu(props) {
    const footerMenuTitleStyle = {
        color:'white',
        'font-size':'26px',
        'border-bottom':'2px solid white'
    };
    return (
        <div className={props.className}>
            <h2 className="footer-menu-title">{props.title}</h2>
            <div className="menu-points">
                {props.content}
            </div>
        </div>
    );
}

export default FooterMenu;