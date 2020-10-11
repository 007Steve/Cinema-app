import React,{useState,useEffect} from 'react'
import './Banner.css'

function Banner({url}) {

    const [ movie, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            fetch(url)
            .then(response => response.json())
            .then(data => setMovies(data.results[Math.floor(Math.random() * data.results.length - 1)]))
          
        }
            fetchData()
    },[])
    
    console.log(movie)
    return (
        <div className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(" https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }
        }>
           <h1>{movie?.title || movie.name|| movie?.original_name}</h1>
        </div>
    )
}

export default Banner
