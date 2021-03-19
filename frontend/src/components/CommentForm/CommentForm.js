import React, {Component} from 'react';
import Comment from "./Comment";
import Button from '../Button/Button'
import './CommentForm.css'
import axios from 'axios'
import SectionTitle from "../SectionTitle/SectionTitle";
import PostCommentForm from "./PostCommentForm";
import Slider from "react-slick";

class CommentForm extends Component {
    constructor(props) {

        super(props);
        this.state = {
            comment: [],
            visible: 2,
            showModal: false,
            settings:{
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows:true,

            }
        };

        this.loadMore = this.loadMore.bind(this);
        this.renderPostForm = this.renderPostForm.bind(this);
    }

    loadMore() {
        this.setState((prev) => {
            return {visible: prev.visible + 4};
        });
    }

    async componentDidMount() {
        await axios.get("https://monovex-shuhai.herokuapp.com/comment/getComment")
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    comment: data.reverse()
                })

            });

    }

    renderPostForm() {
        if (this.state.showModal) {
            this.setState({
                showModal: false
            });
        } else {
            this.setState({
                showModal: true
            });
        }
    }

    renderComment() {
        return (

            <div className="comment-container">
                <Slider {...this.state.settings}>
                {
                    this.state.comment && this.state.comment.map((comment, index) => (

                        <Comment text={comment.text} credentials={comment.firstName + " " + comment.secondName}
                                 date={comment.date}
                                 avatar={comment.firstName.charAt(0) + comment.secondName.charAt(0)}/>

                    ))}
                </Slider>
            </div>


        );
    }

    render() {
        return (
            <section id="reviews" className="comment-form">
                <div className="container">
                    <SectionTitle title="Відгуки"/>
                    <div className="comment-form__inner">
                        {this.renderComment()}
                        <div className="comment-buttons">

                            <Button text="Написати відгук" onClick={this.renderPostForm}/>
                        </div>
                        <PostCommentForm show={this.state.showModal}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default CommentForm;