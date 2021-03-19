import React, {Component} from 'react';
import "./PreferenceItem.css"
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
class PreferenceItem extends Component {
    render() {
        return (
            <div className="preference-item">
                <div className="preference-number">{this.props.number}</div>
                <div className="preference-content">
                <SectionSubtitle title={this.props.title}/>
                <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default PreferenceItem;