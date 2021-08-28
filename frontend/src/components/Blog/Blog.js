import React, {Component} from 'react';
import './Blog.css'
import logo from '../../assets/mono-logo.png'
import BlogContainer from "./BlogContainer";
import axios from "axios";


class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[]

        };
    }
    componentDidMount() {
        this.findPost()
    }

    findPost() {
        axios.get("http://localhost:8080/post/getAllPosts")
            .then(response => response.data)
            .then((data) => {
                this.setState({posts: data});
                console.log(this.state.posts)
            });
    }
    renderPost(){
        return(
            <>
                {
                    this.state.posts&&this.state.posts.map(function(post, index){
                     if(index%2) return <BlogContainer styles="left-side" post={post}/>;
                     else return <BlogContainer styles="right-side" post={post}/>;
                    }
                    )}

            </>
        );
    }
    render() {
        return (
            <section className="blog-section">
            <div className="blog__inner">
                <div className="blog-title-container">
                <img className="blog-title-image"
                src={logo}
                />
                <h1>Радимо почитати</h1>
                </div>
                {this.renderPost()}
            </div>

            </section>
        );
    }
}

export default Blog;