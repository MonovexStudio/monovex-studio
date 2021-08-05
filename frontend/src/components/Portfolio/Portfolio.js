import React from 'react';
import './Portfolio.css';
import SectionTitle from "../SectionTitle/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shaverma from "../../assets/shaverma.jpg";
import petsfield from "../../assets/petsfield.jpg";
import psyholog from "../../assets/psyholog.jpg";
import remkuzovchasti from "../../assets/remkuzovchasti.jpg";
import dimascoin from "../../assets/dimascoin.jpg";
import SliderCard from "../SliderCard/SliderCard.js";


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
                    <h5>Надаємо комплексні послуги для вашого бізнесу в інтернеті: розробка сайту, реєстрація адреси, хостинг, реклама в гуглі, сторінки та реклама в соцмережах (facebook, instagram).</h5>
                    <div className="line"></div>
                    <p>Ми обговорюємо всі важливі питання і фіксуємо їх в технічному завданні та договорі до старту робіт.</p>

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
