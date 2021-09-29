import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

import './dialogs.css';

const DialogItems = (props) => {
    const dialogElements = props.dialogs.map(dialog => 
        <li className="dialogs__item">
            <div className="dialogs__avatar">
                <img src="https://images.app.goo.gl/x1HjNjZABTm4CZ3C7"/>
            </div>
        <NavLink to={"/dialogs/" + dialog.id}>{dialog.name}</NavLink>
        </li>);

    return (
        <div className="dialogs">
        <ul className="dialogs__items">
        {dialogElements}
        </ul>
     </div>
    )
}

export default DialogItems;