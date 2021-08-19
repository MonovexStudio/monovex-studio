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
import { withTranslation } from 'react-i18next';

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
            <SectionTitle title={props.t('portfolio.0')}/>
            <div className="portfolio__inner">
                <div className="portfolio-left">
                    <h4>{props.t('portfolio.1')}</h4>
                    <div className="line"></div>
                    <h5>{props.t('portfolio.2')}</h5>
                    <div className="line"></div>
                    <p>{props.t('portfolio.3')}</p>

                </div>
                <div className="portfolio-right">
                    <Slider {...settings}>
                        <SliderCard image={shaverma} title={"Shaverma Bro"} text={props.t('portfolio-card.1')}/>
                        <SliderCard image={petsfield} title={"Petsfield"} text={props.t('portfolio-card.2')}/>
                        <SliderCard image={psyholog} title={"Психолог Марія"} text={props.t('portfolio-card.3')}/>
                        <SliderCard image={dimascoin} title={"Dimas Coin"} text={props.t('portfolio-card.4')}/>
                        <SliderCard image={remkuzovchasti} title={"Rem Kuzov Chasti"} text={props.t('portfolio-card.5')}/>
                    </Slider>
                </div>
            </div>
        </div>
    </div>
)

export default withTranslation()(Portfolio);
