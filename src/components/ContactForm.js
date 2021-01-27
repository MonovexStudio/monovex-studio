import React, { Component } from 'react';
import "../css/ContactForm.css";
import CheckBox from './CheckBox';
import SectionTitle from './SectionTitle'
export default class ContactForm extends Component {
    render() {
       
        return (
            <div className="contact-form">
                <SectionTitle title="Бриф"/>
                <div className="contact-section-block">
                <div className="contact-section-subtitle">
                    <p>
                        section title
                    </p>
                </div>
                
                <div className="checkbox-section">
                    <CheckBox text="some "/>
                    <CheckBox text="some "/>
                    <CheckBox text="some "/>
                    <CheckBox text="some "/>
                </div>
                </div>
            </div>
        )
    }
}