import React, { useEffect, useState } from "react";
import axios from "axios";

export default function List() {
  const [movieDataP, setMovieDataP] = useState([]);
  const [movieDataT, setMovieDataT] = useState([]);
  const [movieDataU, setMovieDataU] = useState([]);
  const dbData = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: { api_key: "f89a6c1f22aca3858a4ae7aef10de967" },
  });

  useEffect(function () {
    dbData.get("/movie/popular").then((res) => {
      const moviePop = res.data;
      setMovieDataP(moviePop.results);
    });
  }, []);

  useEffect(function () {
    dbData.get("/movie/top_rated").then((res) => {
      const movieTop = res.data;
      setMovieDataT(movieTop.results);
    });
  }, []);

  useEffect(function () {
    dbData.get("/movie/upcoming").then((res) => {
      const movieUop = res.data;
      setMovieDataU(movieUop.results);
    });
  }, []);

  return (
    <>
      <section className="movie">
        <h2>인기 영화</h2>
        <ul>
          {movieDataP.map((e) => (
            <li key={e.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}
                alt={e.title}
              />
              <h3>{e.title}</h3>
            </li>
          ))}
        </ul>
      </section>

      <section className="movie">
        <h2>평점이 높은 영화</h2>
        <ul>
          {movieDataT.map((e) => (
            <li key={e.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}
                alt={e.title}
              />
              <h3>{e.title}</h3>
            </li>
          ))}
        </ul>
      </section>

      <section className="movie">
        <h2>예정작</h2>
        <ul>
          {movieDataU.map((e) => (
            <li key={e.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}
                alt={e.title}
              />
              <h3>{e.title}</h3>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
