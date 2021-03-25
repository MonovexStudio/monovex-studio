import './App.css'
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SideDrawer from "./components/SideDraw/SideDrawer";
import BriefForm from "./components/BriefForm/BriefForm";
import Backdrop from "./components/Backdrop/Backdrop";
import {Component} from "react";
import MainPage from "./components/MainPage/MainPage";


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
