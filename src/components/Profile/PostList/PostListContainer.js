import React, {Component} from 'react';

import {addPostActionCreator} from "../../../redux/profileReducer";
import PostList from "./PostList";
import {connect} from "react-redux";


// const PrevPostListContainer = (props) => {
//     let state = props.store.getState();
//
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }
//
//     let onPostChange = (text) => {
//         props.store.dispatch(updateNewPostActionCreator(text));
//     }
//     return (
//        <PostList updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToState = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(addPostActionCreator(newPost));
        },
    }
}

const PostListContainer = connect(mapStateToProps, mapDispatchToState)(PostList);

export default PostListContainer;