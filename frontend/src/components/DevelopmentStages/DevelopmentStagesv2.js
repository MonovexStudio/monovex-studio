import React, {Component} from 'react';
import './DevelopmentStagesv2.css'
import SectionTitle from "../SectionTitle/SectionTitle";
import DevStage from "./DevStagev2";
import Button from '../Button/Button'
import {withTranslation} from 'react-i18next';
import m1 from "../../assets/m1.png";
import m2 from "../../assets/m2.png";
class DevelopmentStagesv2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stages: [
                {number:1, title:this.props.t('stage-titles.1')},
                {number:2, title:this.props.t('stage-titles.2')},
                {number:3, title:this.props.t('stage-titles.3')},
                {number:4, title:this.props.t('stage-titles.4')},
                {number:5, title:this.props.t('stage-titles.5')},
                {number:6, title:this.props.t('stage-titles.6')}
            ],
            visible: 3
        };
        this.loadMore = this.loadMore.bind(this);

    }
    loadMore() {
        this.setState((prev) => {
            return {visible: prev.visible + 4};
        });
    }


    renderDevStages(){
        console.log(this.state.stages);
        return(
            <div className="stages">
                {
                    this.state.stages&&this.state.stages.slice(0, this.state.visible).map((stage,index)=>(
                        <DevStage number={stage.number} title={stage.title}/>
                    ))
                }
                <div className = "load-more">
                    {this.state.visible < this.state.stages.length &&
                    <Button text="Показати більше" onClick={this.loadMore}/>
                    }
                </div>
                </div>
        );
    }

    render() {

        return (
            <section className="stage-section">
                <div className="container">
                    <SectionTitle title={this.props.t('stage-titles.0')}/>
                    <div className="stage__inner">
                        {this.renderDevStages()}
                        <div className="stage-decoration">
                            <div className="stage-decoration-img1">
                                <img
                                    className="phone-image m1"
                                    src={m1}
                                />
                                <img
                                    className="phone-image m2"
                                    src={m2}
                                />
                            </div>
                            <div className="stage-decoration-img2">
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

export default withTranslation()(DevelopmentStagesv2);