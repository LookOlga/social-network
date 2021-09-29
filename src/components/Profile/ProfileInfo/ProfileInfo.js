import React from 'react';

import './profile-info.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import avatar from "../../../assets/images/avatar/ava.jpg";

const ProfileInfo = (props) => {
    const {profile, status, updateUserStatus, authorizedUserId} = props;
    if(!profile) {
        return <Preloader />
    }
    return (
       <div className="profile__info">
            <div className="profile__photo">
                <img src={profile.photos.large}/>
            </div>
            <div className="profile__data">
                <div className="profile__name">{profile.fullName}</div>
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
                <ul className="profile__items">
                    <li className="profile__item birth-date">
                        Date of birth:
                        <span className="date">XX</span>
                        <span className="month">XX</span>
                        <span className="year">XXXX</span>
                    </li>
                    <li className="profile__item">City: <span>Unknown</span></li>
                    <li className="profile__item">Education: <span>Unknown</span></li>
                    <li className="profile__item">Website: <span>Unknown</span></li>
                </ul> 
            </div>
       </div>
    );
}

export default ProfileInfo;