import React, {Component} from 'react';

class Comment extends Component {
    render() {
        return (
            <div className="comment">
                     <div className="text-container">
                         <p></p>
                     </div>
                <div className="info-container">
                    <div className="avatar"></div>
                    <p></p>
                    <p></p>
                </div>
            </div>
        );
    }
}

export default Comment;