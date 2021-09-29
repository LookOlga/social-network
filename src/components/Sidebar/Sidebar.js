import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import FriendsPanel from './FriendsPanel/FriendsPanel';


import './sidebar.css';

const Sidebar = (props) => {
    return (
        <nav className="sidebar">
            <div className="sidebar__links">
                <NavLink className="sidebar__link" to="/profile">Profile</NavLink>
                <NavLink className="sidebar__link" to="/messages">Messages</NavLink>
                <NavLink className="sidebar__link" to="/users">Users</NavLink>
                <a className="sidebar__link" href="#">News</a>
                <a className="sidebar__link" href="#">Music</a>
                <a className="sidebar__link" href="#">Settings</a>
            </div>
            <FriendsPanel sidebar={props.sidebar} />
        </nav>
    );
}

export default Sidebar;