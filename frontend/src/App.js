import './App.css'
import Header from "./components/Header/Header";
import VideoBackground from "./components/Main/Main";
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Services from "./components/Services/Services";
import SideDrawer from "./components/SideDraw/SideDrawer";
import ContactForm from "./components/BriefForm/ContactForm";
import CommentForm from "./components/CommentForm/CommentForm";
import Backdrop from "./components/Backdrop/Backdrop";
import {Component} from "react";
import Motivation from "./components/Motivation/Motivation";
import Portfolio from "./components/Portfolio/Portfolio";
import Statistic from "./components/Statistic/Statistic";
import DevelopmentStages from "./components/DevelopmentStages/DevelopmentStages";



class App extends Component {
    state = {
        sideDrawerOpen : false
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

        if(this.state.sideDrawerOpen){
            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }
        return (
            <Router>
                    <Header drawerClickHandler={this.drawerToggleClickHandler} toggle={this.state.sideDrawerOpen}/>
                    <SideDrawer show={this.state.sideDrawerOpen}/>
                    {backdrop}
                <VideoBackground/>
                <Services/>
                <Motivation/>
                <Portfolio/>
                <DevelopmentStages/>
                <Statistic/>

                <ContactForm/>
                <CommentForm/>
                <Switch>
                </Switch>
            </Router>
        );
    }
}

export default App;
