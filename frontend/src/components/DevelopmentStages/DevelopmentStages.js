import React, {Component} from 'react';
import './DevelopmentStages.css'
import SectionTitle from "../SectionTitle/SectionTitle";
import DevStage from "./DevStage";
import {withTranslation} from 'react-i18next';
import m1 from '../../assets/m1.png'
import m2 from '../../assets/m2.png'

class DevelopmentStages extends Component {

    render() {

        return (
            <section className="stage-section">
                <div className="container">
                    <SectionTitle title={this.props.t('section-titles.4')}/>
                    <div className="stage__inner">
                        <div className="stages">
                            <DevStage number="1" title={this.props.t('stage-title.1')}/>
                            <div className="stage-line"></div>
                            <DevStage number="2" title={this.props.t('stage-title.2')}/>
                            <div className="stage-line"></div>
                            <DevStage number="3" title={this.props.t('stage-title.3')}/>
                            <DevStage number="4" title={this.props.t('stage-title.4')}/>
                            <div className="stage-line"></div>
                            <DevStage number="5" title={this.props.t('stage-title.5')}/>
                            <div className="stage-line"></div>
                            <DevStage number="Запуск нового сайту" title={this.props.t('stage-title.6')}/>
                        </div>
                        <div className="stage-decoration">
                            <div>
                                <img
                                    className="phone-image m1"
                                    src={m1}
                                />
                                <img
                                    className="phone-image m2"
                                    src={m2}
                                />
                            </div>
                            <div>
                                <img
                                    className="phone-image m3"
                                    src={m2}
                                />
                                <img
                                    className="phone-image m4"
                                    src={m1}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation()(DevelopmentStages);
