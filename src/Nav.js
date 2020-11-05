import React from "react";
import "./Nav.css";
import Avatar from "@material-ui/core/Avatar";
import logo from "./movie.logo.png";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__logoContainer">
        <img className="nav__logo" src={logo} alt="" />
      </div>
      <div className="nav__avatarContainer">
        <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQFPwqjsZFiBAg/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=ZSUEEY_L4G9sCCnroJnkAGfVZHBWO3yQQHTHsZp_nzc" />
      </div>
    </div>
  );
}

export default Nav;
