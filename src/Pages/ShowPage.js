import React, { useEffect } from "react";
import "../styles/ShowPage.css";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { useState } from "react";
function ShowPage() {
  const { id } = useParams();
  const base_url = "https://image.tmdb.org/t/p/original/";
  const API_KEY = "c79c3bbb1069dfc677dc545c70e3c5b2";
  const [movie, setMovie] = useState([]);

  console.log(movie);
  // let id = this.props.match.params.id

  useEffect(() => {
    async function fetchData() {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => setMovie(data));
    }
    fetchData();
  }, [id]);

  return (
    <div className="showPage">
        <Nav/>
      <div
        className="header-containers"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(" https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <h2 className="showPage-title">
          {movie?.title || movie.name || movie?.original_name}
        </h2>
        <div className="buttons-conatainer">
          <button className="buttons">resume</button>
          <button className="buttons">trailer</button>
        </div>
        {/* <div className="info-container">
          <p>
            {" "}
            <span>time</span> <span>season</span> <span>genre</span>
          </p>
          <p>description</p>
        </div> */}
      </div>
      {/* shadow */}
      <div className="shade"></div>

      <div className="showPages-info-container">
        <div className="image-container">
          <img
            className="showPage-image"
            src={`${base_url}${movie.poster_path}`}
            alt=""
          />
          <a href={movie.homepage}>
            <p>Website.</p>
          </a>
        </div>

        <div className="showPage-details-contaner">
          <div className="showPage-synopsis-container">
            <h3 className="showPage-synopsis-title">Synopsis</h3>
            <hr />
          </div>
          <p className="showPage-synopsis-description space">
            {movie.overview}
          </p>
          <div>
            <div className="showPage-synopsis-container">
              <h3 className="showPage-synopsis-title">Box Office</h3>
              <hr />
            </div>
         
            <p className="showPage-star space">
              Released Date: <span>{movie.release_date}</span>
            </p>
            <p className="showPage-star space">
              Time: <span>{movie.runtime}</span> mins
            </p>

            <p className="showPage-star space">
              Ratings: <span>{movie.vote_average}</span>
            </p>
            <div className="showPage-synopsis-container">
              <h3 className="showPage-synopsis-title">Production</h3>
              <hr />
            </div>
        

            <p className="showPage-star space">
              Revenue: <span>{movie.revenue}</span>
            </p>
            <p className="showPage-star space">
              Status: <span>{movie.status}</span>
            </p>
            <p className="showPage-star space">
              Budget: <span>{movie.budget}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowPage;
