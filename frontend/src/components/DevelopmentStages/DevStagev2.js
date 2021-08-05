import React, {Component} from 'react';
import "./DevStagev2.css"

class DevStage extends Component {
    render() {
        return (
            <div className="stage-item">
                <div className="stage-number">{this.props.number}</div>
                <div className="stage-content">
                    <h4>{this.props.title}</h4>
                </div>
            </div>
        );
    }
}

export default DevStage;
