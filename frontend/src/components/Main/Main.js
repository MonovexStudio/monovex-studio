import React, {Component} from 'react';
import "./Main.css";
import titleVideo from "../../assets/video.mp4"
import Fade from 'react-reveal/Fade';
import {Link} from "react-scroll";
import background from '../../assets/pexels6.jpg'
import { withTranslation } from 'react-i18next';

class Home extends Component {

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
                            <nobr>{this.props.t('main-section.1')}</nobr> {this.props.t('main-section.2')} <br/>{this.props.t('main-section.3')}
                        </h1>
                        <div className="main-phrase">{this.props.t('main-section.4')}</div>
                        <Link to="" smooth={true} className="btn-link">{this.props.t('main-section.5')}</Link>
                    </div>
                </Fade>
            </main>


        )
    }
}
export default withTranslation()(Home);