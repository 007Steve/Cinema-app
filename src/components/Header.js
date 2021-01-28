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
    
    </div>
  );
}

export default Header;
