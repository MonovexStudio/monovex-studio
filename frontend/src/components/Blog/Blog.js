import React, {Component} from 'react';
import './Blog.css'
import logo from '../../assets/mono-logo.png'
import BlogContainer from "./BlogContainer";
import axios from "axios";
import {Link} from "react-scroll";
import Slider from "react-slick";
import {BlogCard} from "./BlogCard";


class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []

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

    renderPost() {
        return (
            <>
                {
                    this.state.posts && this.state.posts.map(function (post, index) {
                            if (index % 2) return <BlogContainer styles="left-side" post={post}/>;
                            else return <BlogContainer styles="right-side" post={post}/>;
                        }
                    )}

            </>
        );
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendDots: dots => (
                <div>
                    <ul style={{ margin: "0px" }}> {dots} </ul>
                </div>
            ),
            customPaging: i => (
                <div
                    style={{
                        width: "30px",
                        color: "blue",
                        border: "1px blue solid",
                        marginTop: "30px"
                    }}
                >
                </div>
            )
        };
        return (
            <section className="blog-section">
                <div className="blog-header">
                    <div className="container">
                        <div className="blog-header__inner">
                            <div className="blog-header-left">
                                <div className="blog-header-text">
                                    <h1>Хочете більше дізнатися про сайти та їхню розробку? Ми вам розкажемо!</h1>
                                    <span>Читайте багато цікавих статей про створення сайтів у нашому блозі</span>
                                </div>
                                <Link to="blog" smooth={true} className="blog-button">Читати</Link>
                            </div>
                            <div className="blog-header-right">
                                <Slider {...settings}>
                                    <div>
                                        <BlogCard/>
                                    </div>
                                    <div>
                                        <BlogCard/>
                                    </div>
                                    <div>
                                        <BlogCard/>
                                    </div>
                                    <div>
                                        <h3>1</h3>
                                    </div>
                                    <div>
                                        <h3>2</h3>
                                    </div>
                                    <div>
                                        <h3>3</h3>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="blog__inner">*/}
                {/*    {this.renderPost()}*/}
                {/*</div>*/}

            </section>
        );
    }
}

export default Blog;