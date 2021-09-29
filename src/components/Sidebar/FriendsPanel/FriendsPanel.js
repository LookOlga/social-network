import React, {Component} from 'react';

import './friends-panel.css';

const FriendsPanel = (props) => {
    let state = props.sidebar;
    const friendsElements = state.friends.map(friend => <li className="friends-panel__item">
         <div className="friends-panel__avatar">
                <img src="https://images.app.goo.gl/x1HjNjZABTm4CZ3C7"/>
            </div>
        <div className="friends-panel__name">{friend.name}</div>
    </li>)
    return (
        <div className="friends-panel">
            <ul className="friends-panel__items">
                {friendsElements}
            </ul>
        </div>
    )
}

export default FriendsPanel;