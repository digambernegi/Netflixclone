import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../request";
import "./Banner.css";

function Bannner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []); /* runs <Row> when it first loads n when movie changes only */

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <>
      <div
        className="header"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center fixed",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}
      >
        <div className="banner__content">
          <h1 className="title">{movie?.title || movie?.original_name}</h1>
          <div className="banner__buttons">
            <button>Play</button>
            <button>My List</button>
          </div>

          <h1 className="banner__description">
            {truncate(movie?.overview, 200)}
          </h1>
        </div>
        <div className="banner__fadebtn" />
      </div>
    </>
  );
}

export default Bannner;
