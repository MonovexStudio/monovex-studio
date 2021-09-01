import React from 'react';
import {Link} from "react-router-dom";
import './BlogCard.css'
const BlogCard = (props) => {
    return (
        <Link to={`/post/${props.post.id}`}>
        <div className="blog-card">
            <div className="blog-card-photo">
                <img
                    src={props.post.image}
                    alt={props.post.title}
                    width="100%"
                    height="100%"
                />
            </div>
            <div className="blog-card-container">
                <h1>{props.post.title}</h1>
                <p>{props.post.description}</p>
                <div className="blog-card-additional-info">
                    <p>{props.post.theme}</p>
                    <p>{props.post.date}</p>
                </div>
            </div>

        </div>
        </Link>
    );
};

export default BlogCard;