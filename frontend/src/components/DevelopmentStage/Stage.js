import React, {Component} from 'react';
import './Stage.css'
class Stage extends Component {
    render() {
        return (
            <div className="stage-container">

                <img className="stage-icon" src={this.props.icon}/>
                <div className="stage-content">
                <h3 className="stage-title">{this.props.title}</h3>
                <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default Stage;