import React from "react";
import "../styles/Header.css";
import Banner from "./Banner";
import fetch from "../fetch";
import Nav from "./Nav";
function Header() {
  return (
    <div className="header ">
      <Nav />
      <Banner url={fetch.fetchTrending} />
      <h1 className="header__texts">fsfhhs</h1>
    </div>
  );
}

export default Header;
