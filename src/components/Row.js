import React, { useState, useEffect } from "react";
import "../styles/Row.css";
import MovieCard from "./MovieCard";

function Row({ title, url }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setMovies(data.results));
    }
    fetchData();
  }, [url]);
console.log(movies[5])
  return (
    <>
      <h1>{title}</h1>
      <div className="row">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}

export default Row;
