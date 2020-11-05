import React from "react";
import Header from "./Header.js";
import "./App.css";
import Row from "./Row.js";
import fetch from "./fetch";

function App() {
  return (
    <div className="App">
      <Header />
      <Row title="Trending" url={fetch.fetchTrending} />
      <Row title="Action" url={fetch.fetchAction} />
      <Row title="Comedy" url={fetch.fetchComdey} />
      <Row title="Top Rated" url={fetch.fetchTopRated} />
      <Row title="Horror" url={fetch.fetchHorror} />
      <Row title="Romance" url={fetch.fetchRomance} />
    </div>
  );
}

export default App;
