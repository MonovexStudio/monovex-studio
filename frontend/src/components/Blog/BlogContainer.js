import React, {Component} from 'react';
import './BlogContainer.css'
import Button from "../Button/Button";
import {Link} from "react-router-dom";
import axios from "axios";
import Footer from "../Footer/Footer";

class BlogContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post:[]
        }

    }
    componentDidMount() {
        this.findPostById()
    }
    findPostById() {
        axios.get(`https://monovex-production.herokuapp.com/post/${this.props.match.params.id}`)
            .then(response => response.data)
            .then((data) => {
                this.setState({post: data})
            }) .then((data) => {
            console.log(this.state.post)
        });
    }
    render() {
    let post = this.state.post;

        return (
            <div className="blog-container">
                <div className="container">
                    <div className="blog__inner">
                        <div className="blog-container-titles">
                            <h1>{post.title}</h1>
                            <p>{post.date}</p>
                        </div>
                        <div className="blog-container-img">
                            <img
                            src={post.image}
                            width="100%"
                            height="100%"
                            />
                        </div>
                        <div className="blog-container-text">
                            <p className="blog-container-text-description">{post.description}</p>
                            <section dangerouslySetInnerHTML={{__html: post.fullText}}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default BlogContainer;