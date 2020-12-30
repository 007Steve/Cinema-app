import React, { useState, useEffect } from "react";
import "../styles/Banner.css";
import Nav from "./Nav";

function Banner({ url }) {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      fetch(url)
        .then((response) => response.json())
        .then((data) =>
          setMovies(
            data.results[Math.floor(Math.random() * data.results.length - 1)]
          )
        );
    }
    fetchData();
  }, []);

  return (
    <>
      <Nav/>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(" https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
      
        <h1 className="banner-title">
          {movie?.title || movie.name || movie?.original_name}
        </h1>
      </div>
    </>
  );
}

export default Banner;
