import React, {Component} from 'react';
import CustomInputField from "../BriefForm/CustomInputField";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import Button from "../Button/Button";
import './PostCommentForm.css'
import axios from "axios";

class PostCommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            secondName: "",
            text: "",
            successMessage: false,
            showModal: props.show
        };

    }
    handleSubmit(e){
        e.preventDefault();

        axios.post('https://monovex-shuhai.herokuapp.com/comment/addComment', this.state,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response)=>{
                this.setState({
                    successMessage:true
                });
                setTimeout(() => {
                    this.setState({
                        successMessage:false,
                        showModal:false
                    });
                }, 5000);
            })
    }
    setInputValue(event,inputName){
        if(event.target.name===inputName){
            this.setState({
                [inputName]:event.target.value
                })
            };

        }
    componentWillReceiveProps(nextProps) {
        this.setState({
            showModal: nextProps.show
        });
    }
    render() {

        if(!this.state.showModal){
            return null;
        }
       else if(this.state.successMessage){

            return (<div className="user-response">
                <p>Відгук успішно відправлений</p>
            </div>)
        }
       else if(this.props.show) {
            return (
                <form className="comment-post-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="post-comment-container">
                        <SectionSubtitle title="Залиште свій відгук"/>
                        <CustomInputField type="text" onChange={event => this.setInputValue(event, "firstName")}
                                          name="firstName" placeholder="Ім'я"/>
                        <CustomInputField type="text" onChange={event => this.setInputValue(event, "secondName")}
                                          name="secondName" placeholder="Прізвище"/>
                        <textarea cols="40" name="text" onChange={event => this.setInputValue(event, "text")}
                                  placeholder="Відгук"/>
                        <Button text="Відправити"/>
                    </div>
                </form>
            );
        }
    }
}

export default PostCommentForm;