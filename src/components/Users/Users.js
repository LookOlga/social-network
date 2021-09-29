import React from "react";

import './users.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = (props) => {
    return (
        <div className="user__page">
            <div className="user__list">
                {props.users.map(user =>
                    <User
                        user={user}
                        key={user.id}
                        isFollowingProgress={props.isFollowingProgress}
                        followUser={props.followUser}
                        unfollowUser={props.unfollowUser}/>)}
            </div>
            <Paginator
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}/>
        </div>

    )
}

export default Users;