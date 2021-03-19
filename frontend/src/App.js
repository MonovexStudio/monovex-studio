import './App.css'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Services from "./components/Services/Services";
import SideDrawer from "./components/SideDraw/SideDrawer";
import BriefForm from "./components/BriefForm/BriefForm";
import CommentForm from "./components/CommentForm/CommentForm";
import Backdrop from "./components/Backdrop/Backdrop";
import {Component} from "react";
import Motivation from "./components/Motivation/Motivation";
import Portfolio from "./components/Portfolio/Portfolio";
import Statistic from "./components/Statistic/Statistic";
import DevelopmentStages from "./components/DevelopmentStages/DevelopmentStages";
import ContactForm from "./components/ContactForm/ContactForm";
import MainPage from "./components/MainPage/MainPage";
import Preference from "./components/Preference/Preference";


class App extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
    }

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }
        return (
            <Router>
                <Header drawerClickHandler={this.drawerToggleClickHandler} toggle={this.state.sideDrawerOpen}/>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backdrop}
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/brief" component={BriefForm}/>
                </Switch>

            </Router>

        );
    }
}

export default App;
