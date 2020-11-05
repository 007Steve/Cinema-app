import React from "react";
import "./MovieCard.css";
function MovieCard({ movie }) {
  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="moviecard">
      <img
        src={`${base_url}${movie.poster_path}`}
        alt={movie.title}
        key={movie.id}
      />
      <div className="moviecard__hoverInfo">
        <h4>{movie.title || movie.name}</h4>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
