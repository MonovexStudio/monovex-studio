import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import VideoBackground from "./Pages/VideoBackground";
import {HashRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from "./components/Test";


function App() {
  return (
      <Router>
        <Header/>
        <VideoBackground/>
        <Test/>
        <Switch>
        </Switch>
      </Router>
  );
}

export default App;
