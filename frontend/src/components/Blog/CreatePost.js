import React , {Component} from 'react';
import { uploadFile } from 'react-s3';
import CustomInputField from "../BriefForm/CustomInputField";
import axios from 'axios'
import {Notification, NotificationGroup} from "@progress/kendo-react-notification";
import {Slide} from "@progress/kendo-react-animation";
import './CreatePost.css'

const S3_BUCKET ='monovex';
const REGION ='us-east-2';
const ACCESS_KEY ='AKIASTB4QRKBKBP5VBTP';
const SECRET_ACCESS_KEY ='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';

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,

};

class CreatePost extends Component{
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            error: false,
            loading: false,
            postRequest: {
                title: '',
                description: '',
                fullText: '',
                image: ''
            },
            selectedFile: null,

        };
    }
    onToggle = (flag) => this.setState({ [flag]: !this.state[flag] });
     handleFileInput = (e) => {
        console.log(e.target.files[0].name);
        this.setState(prevState => ({
            selectedFile: e.target.files[0],
            postRequest: {
                ...prevState.postRequest,
                image: "https://monovex.s3.us-east-2.amazonaws.com/" + e.target.files[0].name
            }
        }));

    };
    setInputValue(event, inputName) {
        if (event.target.name === inputName) {
            this.setState(prevState => ({
                postRequest: {
                    ...prevState.postRequest,
                    [inputName]: event.target.value
                }
            }));
        }
    }
     handleUpload = async (file) => {
        uploadFile(file, config)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    };
    handleSubmit(e) {
        e.preventDefault();
        this.setState({loading:true});
        console.log(this.state);
        axios.post('http://localhost:8080/post/addPost', this.state.postRequest,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(()=> {
                this.onToggle("success");
                this.setState({loading:false});
            }).catch(()=>{
            this.onToggle("error");
            this.setState({loading:false});
        })
    }
    render() {
        const { success, error, loading} = this.state;
        return(
        <form className="create-post-section" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="post-input">
            <div className="post-text-input">
            <input onChange={event => this.setInputValue(event, "title")}
                              name="title" placeholder="Заголовок" type="text"/>
            <textarea onChange={event => this.setInputValue(event, "description")}
                              name="description" placeholder="Опис" rows="4" />
            <textarea onChange={event => this.setInputValue(event, "fullText")}
                              name="fullText" placeholder="Повний текст" type="text" rows="20"/>
            </div>
            <div className="post-image-upload">
            <input type="file" onChange={this.handleFileInput}/>
            <h1>{this.state.image}</h1>
            <button type="submit" onClick={() => this.handleUpload(this.state.selectedFile)}>Запостити</button>
            </div>
            </div>
                <NotificationGroup
                style={{
                    right: 20,
                    bottom: 20,
                    alignItems: "flex-start",
                    flexWrap: "wrap-reverse",
                }}
            >
                <Slide direction={success ? "up" : "down"}>
                    {success && (
                        <Notification
                            type={{ style: "success", icon: true }}
                            closable={true}
                            onClose={() => this.setState({ success: false })}
                        >
                            <span className="success-message">Вашу заявку надіслано</span>
                        </Notification>
                    )}
                </Slide>
                <Slide direction={error ? "up" : "down"}>
                    {error && (
                        <Notification
                            type={{ style: "error", icon: true }}
                            closable={true}
                            onClose={() => this.setState({ error: false })}
                        >
                            <span>Помилка! Повторіть спробу через декілька хвилин</span>
                        </Notification>
                    )}
                </Slide>
                <Slide direction={loading ? "up" : "down"}>
                    {loading && (
                        <Notification
                            type={{ style: "info", icon: true }}
                            closable={true}
                            onClose={() => this.setState({ loading: false })}
                        >
                            <span>Надсилання інформації</span>
                        </Notification>
                    )}
                </Slide>
            </NotificationGroup>
        </form>
        )}
};

export default CreatePost;