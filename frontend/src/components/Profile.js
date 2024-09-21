import React from "react";
import "./profile.css";

function Profile() {
  return (
    <div className="profile">
      <div className="details">
        <a href="#"><p className="username">Hello Shakya</p></a>
        <p className="date">Sunday May 19</p>
        <p className="time">6.51 PM</p>
      </div>
      <div className="image">
        <img src="./boy.png" />
      </div>
    </div>
  );
}

export default Profile;
