import React, {Component} from 'react';
import './PreferenceItem.css'
class PreferenceItem extends Component {
    render() {
        return (
            <div className="preference-container">
                <img className="preference-icon" alt={"Переваги: " + this.props.title} src={this.props.icon}/>
                <div className="preference-content">
                <h3 className="preference-title">{this.props.title}</h3>
                <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default PreferenceItem;
