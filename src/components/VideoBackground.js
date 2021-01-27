import React, {Component} from 'react';
import "../css/VideoBackground.css";
import titleVideo from "../assets/video.mp4"
import Fade from 'react-reveal/Fade';
import {Link} from "react-scroll";


export default class Home extends Component {
    
    render() {
        
        return (
    <div className="intro">
        <video className="title-video" autoPlay loop muted >
                        <source src = {titleVideo} type = 'video/mp4'/>
                        <source src = {titleVideo} type = 'video/ogg' codecs= 'theora, vorbis'/>
                    </video>
        <Fade left big cascade>
        <div className="text-section">
                <h1 className="background-title"><nobr >ПРОФЕСІЙНЕ</nobr> СТВОРЕННЯ <br/>САЙТІВ</h1>
                <div className="desc">Ми не просто створюємо сайти,<br/> ми створюємо емоції.</div>
            <Fade left big cascade>
                <Link to="" smooth={true} className="btn-link">Замовити</Link>
            </Fade>
            </div>
        </Fade>
    </div>
        

        )
    }
}