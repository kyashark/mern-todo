import React from "react";
import profileStyle from "../styles/Profile.module.css";

function Profile() {
  return (
    <div className={profileStyle.profile}>
      <div className={profileStyle.details}>
        <a href="#"><p className={profileStyle.username}>Hello Shakya</p></a>
        <p className={profileStyle.date}>Sunday May 19</p>
        <p className={profileStyle.time}>6.51 PM</p>
      </div>
      <div className={profileStyle.image}>
        <img src="./boy.png" />
      </div>
    </div>
  );
}

export default Profile;
