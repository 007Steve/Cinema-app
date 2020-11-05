import React from "react";
import "./Header.css";
import Nav from "./Nav";
import Banner from "./Banner";
import fetch from "./fetch";

function Header() {
  return (
    <>
      <div className="header">
        <Banner url={fetch.fetchTrending} />
      </div>
    </>
  );
}

export default Header;
