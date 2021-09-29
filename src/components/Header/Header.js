import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import './header.css';


const Header = (props) => {
    return (
        <header className="header">
            <div className="header__logo">
                <a className="header__icon" >Comma</a>
            </div>
            <div className="header__login">
                {props.isAuth ?
                    <div>
                        {props.login}
                        <button className="header__link header__link--logout" onClick={props.logout}>Log Out</button>
                    </div> :
                    <NavLink to={'/login'} className="header__link">Log In</NavLink> }
            </div>
        </header>
    )
}

export default Header;