import React, {Component} from 'react';
import './Blog.css'
import testImage from '../../assets/stage1icon.jpg'
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import BlogContainer from "./BlogContainer";
class Blog extends Component {
    render() {
        return (
            <section className="blog-section">

                {/*<div className="left-side-bg">*/}
                {/*</div>*/}
                {/*<div className="blog-card">*/}
                {/*    <h1>Мотивация участия и функции блогов</h1>*/}
                {/*    <p> Следует учитывать, что чтение блогов и авторство — два разных по содержанию*/}
                {/*     процесса. Люди, пользующиеся коммуникативными возможностями блогов вне контекста ведения собственного*/}
                {/*     </p>*/}
                {/*    <button>Дізнатись більше</button>*/}
                {/*</div>*/}
                {/*<div className="blog-photo">*/}
                {/*    <img*/}
                {/*        src={testImage}*/}
                {/*        width="100%"*/}
                {/*        height="100%"*/}
                {/*    />*/}
                {/*</div>*/}
                <BlogContainer styles="left-side"/>
                <BlogContainer styles="right-side"/>
                <BlogContainer styles="left-side"/>
                <BlogContainer styles="right-side"/>
                <BlogContainer styles="left-side"/>
                <BlogContainer styles="right-side"/>
            </section>
        );
    }
}

export default Blog;