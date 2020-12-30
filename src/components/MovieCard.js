import React from "react";
import "../styles/MovieCard.css";
import { Link } from "react-router-dom";
function MovieCard({ movie }) {
  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="moviecard">
        <img
          src={`${base_url}${movie.poster_path}`}
          alt={movie.title}
          key={movie.id}
        />
        {/* <div className="moviecard__hoverInfo">
          <h4>{movie.title || movie.name}</h4>
          <p>{movie.overview}</p>
        </div> */}
      </div>
    </Link>
  );
}

export default MovieCard;
