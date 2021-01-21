import React from "react";
import "../styles/Nav.css";
import Avatar from "@material-ui/core/Avatar";
import { selectUser, logout } from "../features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
function Nav({}) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logutApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="nav">
      <Link to="/">
        <img className="nav__logo" src="/movie.logo.png" alt="" />
      </Link>
      <div className="nav__avatarContainer">
        <Avatar className="nav__pic" src={user.picture} onClick={logutApp} />
      </div>
    </div>
  );
}

export default Nav;
