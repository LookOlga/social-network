import React from 'react';

import './users.css';
import * as axios from 'axios';
import userIcon from '../../assets/images/users/user_icon.png';

let UsersFC = (props) => {
    const getUsers = () => {
        if (props.users.length === 0)
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                    const users = response.data.items;
                    props.setUsers(users);
                }
            )
    }

    return (
        <div className="user__list">
            {props.users.map(user => <div key={user.id} className="user__item">
                <div className="user__avatar">
                    <div className="user__photo">
                        <img src={user.photos.small !== null ? user.photos.small : userIcon} alt=""/>
                    </div>
                    {user.followed ?
                        <button onClick={() => {
                            props.unfollow(user.id)
                        }} className="user__btn user__btn--unfollow">unfollow</button> :
                        <button onClick={() => {
                            props.follow(user.id)
                        }} className="user__btn user__btn--follow">follow</button>}
                </div>
                <div className="user__info">
                    <div className="user__info-left">
                        <div className="user__name">{user.name}</div>
                        <div className="user__status">{user.status}</div>
                    </div>
                    {/*<div className="user__info-right">*/}
                    {/*    <div className="user__country">{user.location.country}</div>*/}
                    {/*    <div className="user__city">{user.location.city}</div>*/}
                    {/*</div>*/}
                </div>
            </div>)}
        </div>
    )
}

export default UsersFC;