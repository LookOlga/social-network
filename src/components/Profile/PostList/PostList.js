import React, {Component} from 'react';

import './post-list.css';
import './post.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validation/validator";
import {Textarea} from "../../common/FormsControls/FormsControls";


const PostList = React.memo((props) => {

    const sendNewPost = (values) => {
        props.addPost(values.newPost);
    }

    const postElements = props.posts.map(post =>
        <li className="post__item">
            <div className="post__photo">
                <img src=""/>
            </div>
            <div className="post__content">
                <div className="post__name">{post.name}</div>
                <p className="post__text">{post.postText}</p>
            </div>
        </li>)
    return (
        <div className="post__wrapper">
            <ul className="post__list">
                {postElements}
            </ul>
            <PostReduxForm onSubmit={sendNewPost}/>
        </div>
    )
});

const maxLength10 =maxLengthCreator(10);
const PostForm = (props) => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit} className="post-form">
             <Field
                 className="post-form__field"
                 name={"newPost"}
                 component={Textarea}
                 validate={[required, maxLength10]}/>
            <button className="post-form__btn" >Add Post</button>
        </form>
    )
}

const PostReduxForm = reduxForm({
    form: 'posts'
})(PostForm);

export default PostList;