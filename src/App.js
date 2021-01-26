import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import VideoBackground from "./components/VideoBackground";
import {HashRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from "./components/Services";


function App() {
  return (
      <Router>
        <Header/>
        <VideoBackground/>
        <Services/>
        <Switch>
        </Switch>
      </Router>
  );
}

export default App;
