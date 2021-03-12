import React, {Component} from 'react';
import "./Main.css";
import titleVideo from "../../assets/video.mp4"
import Fade from 'react-reveal/Fade';
import {Link} from "react-scroll";
import background from '../../assets/pexels6.jpg'

export default class Home extends Component {

    render() {

        return (
            <main className="main">
                <img
                    className="main-image"
                    src={background}
                />
                <Fade left big cascade>
                    <div className="text-section">
                        <h1 className="main-title">
                            <nobr>ПРОФЕСІЙНЕ</nobr> СТВОРЕННЯ <br/>САЙТІВ
                        </h1>
                        <div className="main-phrase">Якісний товар - найкращий спосіб реклами.</div>
                        <Link to="" smooth={true} className="btn-link">Замовити</Link>
                    </div>
                </Fade>
            </main>


        )
    }
}