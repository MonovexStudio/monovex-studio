import React, {Component} from 'react';
import './Blog.css'
import logo from '../../assets/mono-logo.png'
import BlogContainer from "./BlogContainer";
import axios from "axios";
import {Link} from "react-scroll";
import Slider from "react-slick";
import BlogCard from "./BlogCard";


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
        axios.get("https://monovex-production.herokuapp.com/post/getAllPosts")
            .then(response => response.data)
            .then((data) => {
                this.setState({posts: data});
                console.log(this.state.posts)
            });
    }

    renderPost() {
        return (
                    this.state.posts && this.state.posts.map((post, index) => {
                            return <BlogCard post={post}/>
                        }
                    )
        );
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
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
                                <div className="blog-header-right-text">
                                    <h1>Нові Статті</h1>

                                </div>
                                <Slider {...settings}>
                                    {this.renderPost()}
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