import React, {Component} from 'react';
import Main from "../Main/Main";
import Services from "../Services/Services";
import Motivation from "../Motivation/Motivation";
import Portfolio from "../Portfolio/Portfolio";
import DevelopmentStages from "../DevelopmentStage/DevelopmentStages";
import Statistic from "../Statistic/Statistic";
import ContactForm from "../ContactForm/ContactForm";
import CommentForm from "../CommentForm/CommentForm";
import Preference from "../Preference/Preference";

class MainPage extends Component {
    render() {
        return (
            <div>
                <Main/>
                <Services/>
                <Motivation/>
                <Portfolio/>
                <DevelopmentStages/>
                <Statistic/>
                <ContactForm/>
                <Preference/>
                <CommentForm/>
            </div>
        );
    }
}

export default MainPage;
