import './App.css';
import Header from "./components/Header";
import VideoBackground from "./components/VideoBackground";
import {HashRouter as Router, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from "./components/Services";
import Test from "./components/Test";


function App() {
    return (
        <Router>
            <Header/>
            <VideoBackground/>
            <Services/>
            <Test/>
            <Switch>
            </Switch>
        </Router>
    );
}

export default App;
