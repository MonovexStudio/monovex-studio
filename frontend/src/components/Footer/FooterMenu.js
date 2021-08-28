import React from 'react';
import './FooterMenu.css'

function FooterMenu(props) {

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