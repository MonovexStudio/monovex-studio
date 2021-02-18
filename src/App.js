import './App.css'
import Header from "./components/Header/Header";
import VideoBackground from "./components/VideoBackground/VideoBackground";
import {HashRouter as Router, Switch} from 'react-router-dom';
import Services from "./components/Services/Services";
import SideDrawer from "./components/SideDraw/SideDrawer";
import ContactForm from "./components/ContactForm/ContactForm";
import Backdrop from "./components/Backdrop/Backdrop";
import {Component} from "react";


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
        let sideDrawer, backdrop;

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
                <ContactForm/>
                <Switch>
                </Switch>
            </Router>
        );
    }
}

export default App;
