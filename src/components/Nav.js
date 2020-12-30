import React from "react";
import "../styles/Nav.css";
import Avatar from "@material-ui/core/Avatar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { selectUser, logout } from "../features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../firebase";

function Nav({}) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logutApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="/movie.logo.png"
        alt=""
        onClick={logutApp}
      />
      <div className="nav__avatarContainer">
        <img className="nav__pic" src={ user.picture} alt="user picture" />
      </div>
    </div>
  );
}

export default Nav;
