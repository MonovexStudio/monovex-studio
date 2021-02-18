import './App.css';
import Header from "./components/Header";
import VideoBackground from "./components/VideoBackground";
import {HashRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Test from "./components/Test";


function App() {
  return (
      <Router>
        <Header/>
        <VideoBackground/>
        <Services/>
        <ContactForm/>
        <Test/>
        <Switch>
        </Switch>
      </Router>
  );
import Header from "./components/Header/Header";
import VideoBackground from "./components/VideoBackground/VideoBackground";
import {HashRouter as Router, Switch} from 'react-router-dom';
import Services from "./components/Services/Services";
import SideDrawer from "./components/SideDraw/SideDrawer";
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
                <Switch>
                </Switch>
            </Router>
        );
    }
}

export default App;
