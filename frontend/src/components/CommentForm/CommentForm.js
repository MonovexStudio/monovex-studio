import React, {Component} from 'react';
import Comment from "./Comment";
import Button from '../Button/Button'
import './CommentForm.css'
import axios from 'axios'
import LinkButton from '../LinkButton/LinkButton'
import SectionTitle from "../SectionTitle/SectionTitle";

class CommentForm extends Component {
    constructor(props) {

        super(props);
        this.state = {
            comment: [],
            visible: 4,
        };
        this.loadMore = this.loadMore.bind(this);

    }
    loadMore() {
        this.setState((prev) => {
            return {visible: prev.visible + 4};
        });
    }
   async componentDidMount() {
       await axios.get("http://localhost:8080/comment/getComment")
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    comment: data.reverse()
                })

            });

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
                <div className = "load-more-section">
            {this.state.visible < this.state.comment.length &&
            <Button text="Читати більше" onClick={this.loadMore}/>
            }
                </div>
            </div>
        );
    }
}

export default CommentForm;