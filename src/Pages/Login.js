import React, { useState } from "react";
import "../styles/Login.css";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
 import { auth, provider } from '../firebase'
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const setUserHandler = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        picture: profilePic,
        loggedin: true,
      })
    );
  };

  const setUserHandlerGoogle = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message))
    console.log(auth)
    // dispatch(
    //   login({
    //     name: name,
    //     email: email,
    //     password: password,
    //     picture: profilePic,
    //     loggedin: true,
    //   })
    // );
    // addd redux from google data user
  };





console.log()
  return (
    <div className="login">
    <iframe title="3d model" id="cdc90803-2a7a-4d97-8cac-c1abd3fa4f54" src="https://www.vectary.com/viewer/v1/?model=cdc90803-2a7a-4d97-8cac-c1abd3fa4f54&env=studio3" frameborder="0" width="100%" height="480"></iframe>
      <h2 className="login-title">Sign in </h2>
      <form className="login-form">
        <label>Username</label>
        <input
          className="login-input name"
          type="name"
          required
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>E-Mail</label>
        <input
          className="login-input email"
          type="text"
          required
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="login-input email"
          type="password"
          required
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Profile Picture</label>
        <input
          className="login-input name"
          type="text"
          required
          placeholder="Profile Picture (optional url)"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
      </form>
      <button
        className="login-btn"
        disabled={!name}
        type="submit"
         onClick={setUserHandler}
      >
        Sign in
      </button>
      <br />
      <p onClick={setUserHandlerGoogle}className="google">Sign with Google</p>
      
    </div>
  );
}

export default Login;
