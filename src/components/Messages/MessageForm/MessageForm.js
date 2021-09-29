import React, {Component} from 'react';

import './message-form.css';

const MessageForm = () => {
    return (
        <form className="message-form">
            <textarea className="message-form__field" type="text" placeholder="Write your message..."></textarea>
            <button className="message-form__btn" type="submit">Send</button>
        </form>
    )
}

export default MessageForm;