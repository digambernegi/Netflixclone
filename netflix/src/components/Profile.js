import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import Nav from "./Nav";
import "./Profile.css";
import { selectUser } from "../features/userSlice";
import Plans from "./Plan";

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  return (
    <div className="profile__Screen">
      <Nav />
      <div className="profile__ScreenBody">
        <h1>Edit Profile</h1>
        <div className="profile__ScreenLogo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profile__ScreenDetails">
            <h2>{user.email}</h2>
            <div className="profile__ScreenPlan">
              <h3>Plans</h3>
              <Plans />

              <button onClick={() => auth.signOut()}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
