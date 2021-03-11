import React from 'react';
import './Portfolio.css';
import SectionTitle from "../SectionTitle/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shaverma from "../../assets/shaverma.png";
import petsfield from "../../assets/petsfield.png";
import psyholog from "../../assets/psyholog.png";
import remkuzovchasti from "../../assets/remkuzovchasti.png";
import dimascoin from "../../assets/dimascoin.png";
import SliderCard from "../SliderCard/SliderCard.js";
import PortfolioStat from "../PortfolioStat/PortfolioStat";
import site from '../../assets/landing-page.svg';
import diagram from '../../assets/diagram.svg';
import working from '../../assets/working.svg';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
};

const Portfolio = props => (
    <div id="portfolio" className="portfolio">
        <div className="container">
            <SectionTitle title={"Наші роботи"}/>
            <div className="portfolio__inner">
                <div className="portfolio-left">
                    <h4>Багато корисних функцій для вашого майбутнього веб-сайту</h4>
                    <div className="line"></div>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eius eum explicabo itaque neque quam quibusdam totam? Animi dicta distinctio dolor doloremque dolorum eius magnam quidem vel veritatis. Esse, rerum.</h5>
                    <div className="line"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ea eos neque repudiandae sed? Dolores laudantium omnis quasi ratione reiciendis saepe, voluptates! Aspernatur culpa itaque numquam quam sint temporibus ut.</p>
                    {/*<PortfolioStat image={site} value={5} span={""} text={"виконаних робіт"}/>
                    <PortfolioStat image={working} value={2} span={"+"} text={"роки роботи на ринку"}/>
                    <PortfolioStat image={diagram} value={100} span={"%"} text={"задоволених клієнтів"}/>*/}
                </div>
                <div className="portfolio-right">
                    <Slider {...settings}>
                        <SliderCard image={shaverma} title={"Shaverma Bro"} text={"Інтернет-магазин ресторану Шаверма Бро"}/>
                        <SliderCard image={petsfield} title={"Petsfield"} text={"Монети для Fifa за найнижчими цінам лише на DimasCoin"}/>
                        <SliderCard image={psyholog} title={"Психолог Марія"} text={"Послуги професійного психолога Марії Шугай"}/>
                        <SliderCard image={dimascoin} title={"Dimas Coin"} text={"Монети для Fifa за найнижчими цінам лише на DimasCoin"}/>
                        <SliderCard image={remkuzovchasti} title={"Rem Kuzov Chasti"} text={"Купуйте автомобільні деталі на Rem Kuzov Chasti"}/>
                    </Slider>
                </div>
            </div>
        </div>
    </div>
)

export default Portfolio;
