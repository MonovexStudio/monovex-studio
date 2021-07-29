import React from 'react';
import './Motivation.css'
import LinkButton from "../LinkButton/LinkButton";

const Motivation = props => (
    <section id="motivation" className="motivation">
        <div className="container">
            <div className="motivation__inner">
                <h3>Замовте сайт вже зараз</h3>
                <p>Поки ви думаєте, інші вже створюють свій бізнес разом з <span>Monovex</span> Studio.</p>
                <div className="motivation-button">
                    <svg className="motivation-arrow" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 80 180">
                        <path
                            d="M54.1 108c-.5 0-.9-.2-1.2-.6-.5-.7-.3-1.6.4-2.1 1.5-1 9.5-5.5 14.6-8.3-17.4-.5-31.3-7.3-41.3-20C9.9 55.7 9.5 24.2 14.2 3.7c.2-.8 1-1.3 1.8-1.1.8.2 1.3 1 1.1 1.8-4.6 19.9-4.2 50.3 11.8 70.8 9.5 12.2 23 18.6 39.9 18.9h.3l-3.2-4c-1.4-1.7-2.7-3.3-4.1-5.1-.7-.9-1.5-1.9-2.3-2.9-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2 0 0 0 .1.1.1l6.4 7.9c.5.6.9 1.1 1.4 1.7 1.5 1.8 3.1 3.6 4.3 5.5 0 .1.1.1.1.2.1.2.1.3.2.5v.3c0 .2 0 .3-.1.5 0 .1-.1.1-.1.2-.1.2-.2.3-.3.4-.1.1-.2.1-.3.2 0 0-.1 0-.2.1-.9.4-16 8.6-18.2 10.1-.4 0-.7.1-1 .1z"></path>
                    </svg>
                <LinkButton link="contact" text="Замовити"/>
                </div>
            </div>
        </div>
    </section>
)
export default Motivation;