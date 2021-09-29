import React from "react";
import userIcon from "../../assets/images/users/user_icon.png";

import './users.css';
import {NavLink} from "react-router-dom";



const User = (props) => {
    const {user, isFollowingProgress, followUser, unfollowUser} = props;
    return (
        <div className="user__item">
            <div className="user__avatar">
                <div className="user__photo">
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : userIcon} alt=""/>
                    </NavLink>
                </div>
                {user.followed ?
                    <button disabled={isFollowingProgress.some(id => id === user.id)}
                            onClick={() => {
                                unfollowUser(user.id);
                            }}
                            className="user__btn user__btn--unfollow">
                        unfollow
                    </button> :
                    <button disabled={isFollowingProgress.some(id => id === user.id)}
                            onClick={() => {
                                followUser(user.id);
                            }}
                            className="user__btn user__btn--follow">
                        follow
                    </button>}
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
        </div>
    )
}

export default User;