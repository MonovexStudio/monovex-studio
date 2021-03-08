import React, {Component} from 'react';
import './Comment.css'

class Comment extends Component {
    render() {
        return (
            <div className="comment">
                     <div className="text-container bubble-bottom-left" contenteditable>
                         {this.props.text}
                     </div>
                <div className="info-container">
                    <div className="credentials">
                        <div className="avatar-circle">
                        <span className="avatar">{this.props.avatar}</span>
                        </div>
                    <p>{this.props.credentials}</p>
                    </div>
                    <p>{this.props.date}</p>
                </div>
            </div>
        );
    }
}

export default Comment;