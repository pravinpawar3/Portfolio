import React from 'react';
import './ProfilePhoto.css'; // Import the CSS file
import RotatingCube from "../../containers/skills/RotatingCube";

const ProfilePhoto = ({ imageUrl }) => {
  return (
    <div className="profile-photo">
      <img src={imageUrl} alt="Profile" />  
      <div> <RotatingCube  /></div>
    </div>
  );
};

export default ProfilePhoto;
