import React, {Component} from 'react';
import CustomInputField from "../ContactForm/CustomInputField";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import Button from "../Button/Button";
import './PostCommentForm.css'

class PostCommentForm extends Component {
    render() {
        if(!this.props.show){
            return null;
        }
        return (

            <div className="post-comment-container">
                <SectionSubtitle title="Залиште свій відгук"/>
                <CustomInputField type="text" placeholder="Ім'я"/>
                <CustomInputField type="text" placeholder="Прізвище"/>
                <textarea cols="40" placeholder="Відгук"></textarea>
                <Button text="Відправити"/>
            </div>
        );
    }
}

export default PostCommentForm;