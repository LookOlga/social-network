import React, {Component} from 'react';

import './../messages.css';

const MessageItems = (props) => {
    const messageElements = props.messages.map(message => <li className="messages__item">{message.message}</li>);
    return (
        <div className="messages">
        <ul className="messages__items">
            {messageElements}
        </ul>
        </div>
    )
}

export default MessageItems;