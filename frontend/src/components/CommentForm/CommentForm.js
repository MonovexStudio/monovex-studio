import React, {Component} from 'react';
import Comment from "./Comment";
import Button from '../Button/Button'
import './CommentForm.css'
import axios from 'axios'
import LinkButton from '../LinkButton/LinkButton'
import SectionTitle from "../SectionTitle/SectionTitle";
import CustomInputField from "../ContactForm/CustomInputField";
import PostCommentForm from "./PostCommentForm";

class CommentForm extends Component {
    constructor(props) {

        super(props);
        this.state = {
            comment: [],
            visible: 4,
            showModal: false
        };
        this.loadMore = this.loadMore.bind(this);
        this.renderPostForm= this.renderPostForm.bind(this);
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
    renderPostForm(){
        if(this.state.showModal){
            this.setState({
                showModal: false
            });
        }
        else {
            this.setState({
                showModal: true
            });
        }
    }
    renderComment() {
            return  (

                <div className="comment-container">

                    {
                        this.state.comment&&this.state.comment.slice(0, this.state.visible).map((comment, index) => (

                           <Comment text={comment.text} credentials={comment.firstName+" "+comment.secondName}
                                    date={comment.date} avatar={comment.firstName.charAt(0)+comment.secondName.charAt(0)}/>

                        )) }

                </div>


        );
    }

    render() {
        return (
            <div className="comment-form">
                <SectionTitle title="Відгуки"/>
                {this.renderComment()}
                <div className="comment-buttons">
                    {this.state.visible < this.state.comment.length &&
                    <Button text="Читати більше" onClick={this.loadMore}/>
                    }
                    <Button text="Написати відгук" onClick={this.renderPostForm}/>
                </div>
                <PostCommentForm show={this.state.showModal}/>

            </div>
        );
    }
}

export default CommentForm;