import React from 'react'
import './MovieCard.css'
function MovieCard({movie}) {

    const base_url = " https://image.tmdb.org/t/p/original/"
    
    return (
        <div className="moviecard">
            <img src={`${base_url}${movie.poster_path}`} alt={movie.title} key={movie.id}/>
        </div>
    )
}

export default MovieCard
