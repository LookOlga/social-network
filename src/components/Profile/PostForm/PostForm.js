import React, {Component} from 'react';

import './post-form.css';

const PostForm = () => {
    return (
        <form className="post-form">
            <textarea className="post-form__field" type="text" placeholder="What's new?"></textarea>
            <button className="primary-btn" type="submit">Send</button>
        </form>
    )
}

export default PostForm;