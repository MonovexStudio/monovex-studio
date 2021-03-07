import React, {Component} from 'react';
import Comment from "./Comment";


class CommentForm extends Component {
    render() {
        return (
            <div className="comment-form">
                <div className="comment-container">
                    <Comment/>
                </div>
            </div>
        );
    }
}

export default CommentForm;