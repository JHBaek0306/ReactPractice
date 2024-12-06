import React from 'react';
import './UserProfileStyle.css';
import profileImage from "../assets/images/ProfileImage.jpg"

interface UserProfileProps {
  username: string;
  avatarUrl: string;
};

const userProfileProps: UserProfileProps = { username: 'Baek JunHyeok', avatarUrl: profileImage };

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="profileImage"></div>
      <div className='username'>{userProfileProps.username}</div>
    </div>
  );
};

export default UserProfile;