import React, {Component} from 'react';
import "../css/SectionTitle.css";


class SectionTitle extends Component {
    render() {
        return (
            <>
                <h3 className="section-title">{this.props.title}</h3>
            </>
        );
    }
}

export default SectionTitle;