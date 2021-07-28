import React, {Component} from 'react';
import Main from "../Main/Main";
import Services from "../Services/Services";
import Motivation from "../Motivation/Motivation";
import Portfolio from "../Portfolio/Portfolio";
import Preference from "../Preference/Preference";
import Statistic from "../Statistic/Statistic";
import ContactForm from "../ContactForm/ContactForm";
import CommentForm from "../CommentForm/CommentForm";
import DevelopmentStages from "../DevelopmentStages/DevelopmentStagesv2";
import Footer from "../Footer/Footer";

class MainPage extends Component {
    render() {
        return (
            <div>
                <Main/>
                <Services/>
                <Motivation/>
                <Portfolio/>
                <Preference/>
                <DevelopmentStages/>
                {/*<CommentForm/>*/}
                <ContactForm/>
                <Statistic/>

                <Footer/>
            </div>
        );
    }
}

export default MainPage;
