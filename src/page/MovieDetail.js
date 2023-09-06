import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const [movieData, setMovieData] = useState(null);
  const { id } = useParams();
  console.log(id);
  const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=f89a6c1f22aca3858a4ae7aef10de967`;
  useEffect(() => {
    // Define the URL you want to fetch data from

    // Make an HTTP GET request to fetch the data
    axios.get(apiUrl).then((response) => {
      setMovieData(response.data); // Assuming the response contains JSON
      console.log(response.data);
    });
  }, []);

  return (
    <div className="back_G">
      {movieData ? (
        <div className="inner">
          {movieData.poster_path && ( // poster_path가 있는 경우에만 이미지 표시
            <div className="img_wrap">
              <img
                className="ps-img"
                src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
                alt=""
              />
            </div>
          )}
          <div className="txt_wrap">
            <h2>{movieData.title}</h2>
            <p> {movieData.overview}</p>
          </div>

          {/* Display other movie details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {movieData &&
        movieData.poster_path && ( // poster_path가 있는 경우에만 이미지 표시
          <img
            className="bg-img"
            src={`https://image.tmdb.org/t/p/original${movieData.backdrop_path}`}
            alt=""
          />
        )}
    </div>
  );
}

export default MovieDetail;
