import React, {Component} from 'react';
import './BlogContainer.css'
import Button from "../Button/Button";
import {Link} from "react-router-dom";

class BlogContainer extends Component {

    render() {

        return (
            <div className="blog-container">
                <div className="blog-card-container">
                    <h1>{this.props.post.title}</h1>
                    <section dangerouslySetInnerHTML={{ __html: this.props.post.description }}/>
                    <Link to={`/post/${this.props.post.id}`}>Дізнатись більше</Link>
                </div>
                <div className={blogPhoto}>
                    <img
                        src={this.props.post.image}
                        alt={this.props.post.title}
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        );
    }
}

export default BlogContainer;