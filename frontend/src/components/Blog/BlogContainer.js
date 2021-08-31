import React, {Component} from 'react';
import './BlogContainer.css'
import Button from "../Button/Button";

class BlogContainer extends Component {

    render() {
        let sideBg;
        let blogPhoto = 'blog-photo';
        let blogCard = 'blog-card';
        if(this.props.styles==='left-side'){
            sideBg = 'left-side-bg';
            blogPhoto += ' left-blog-photo';
            blogCard += ' left-blog-card'
        }
        if(this.props.styles==="right-side"){
            sideBg = 'right-side-bg';
            blogPhoto += ' right-blog-photo';
            blogCard += ' right-blog-card';
        }
        return (
            <div className="blog-container">
                <div className={sideBg}>
                </div>
                <div className={blogCard}>
                    <h1>{this.props.post.title}</h1>
                    <p>{this.props.post.description}</p>
                    <Button onClick={()=>{}} text="Дізнатись більше"/>
                </div>
                <div className={blogPhoto}>
                    <img
                        src={this.props.post.image}
                        alt={this.props.post.title}
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        );
    }
}

export default BlogContainer;