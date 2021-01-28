import React, {Component} from 'react';
import "../css/SectionSubtitle.css";


class SectionSubtitle extends Component {
    render() {
        return (
            <>
                <p className="subtitle-in-section">{this.props.title}</p>
            </>
        );
    }
}

export default SectionSubtitle;