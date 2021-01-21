import React from "react";
import "../styles/HomePage.css";
import Row from "../components/Row.js";
import fetch from "../fetch";
import Banner from "../components/Banner";
import Header from "../components/Header";

function HomePage() {
  return (
    <div className="homePage">
     <Header/>
      <Row title="Trending" url={fetch.fetchTrending} />
      <Row title="Action" url={fetch.fetchAction} />
      <Row title="Comedy" url={fetch.fetchComdey} />
      <Row title="Top Rated" url={fetch.fetchTopRated} />
      <Row title="Horror" url={fetch.fetchHorror} />
      <Row title="Romance" url={fetch.fetchRomance} />
    </div>
  );
}

export default HomePage;
