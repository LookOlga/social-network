import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostListContainer from "./PostList/PostListContainer";
import './profile.css';

const Profile = (props) => {
    return (
        <div className="profile">
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} authorizedUserId={props.authorizedUserId}/>
            {/* <PostForm /> */}
            <PostListContainer/>
        </div>
    )
}

export default Profile;