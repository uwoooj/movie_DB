import React, { useEffect, useState } from "react";
import axios from "axios";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css"; // Swiper 스타일 가져오기
import "swiper/components/pagination/pagination.min.css"; // Swiper 페이지네이션 스타일 가져오기
import "swiper/components/navigation/navigation.min.css"; // Swiper 내비게이션 스타일 가져오기

export default function List() {
  const [movieDataP, setMovieDataP] = useState([]);
  const [movieDataT, setMovieDataT] = useState([]);

  useEffect(function () {
    const dbData = axios.create({
      baseURL: "https://api.themoviedb.org/3",
      params: { api_key: "YOUR_API_KEY" }, // 본인의 실제 API 키로 대체하세요
    });

    dbData.get("/movie/popular").then((res) => {
      const moviePop = res.data;
      setMovieDataP(moviePop.results);
    });

    dbData.get("/movie/top_rated").then((res) => {
      const movieTop = res.data;
      setMovieDataT(movieTop.results);
    });
  }, []);

  useEffect(() => {
    new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <>
      <section className="movie">
        <h2>인기 영화</h2>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {movieDataP.map((e) => (
              <div key={e.id} className="swiper-slide">
                <img
                  src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}
                  alt={e.title}
                />
                <h3>{e.title}</h3>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </section>

      <section className="movie">
        <h2>평점이 높은 영화</h2>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {movieDataT.map((e) => (
              <div key={e.id} className="swiper-slide">
                <img
                  src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}
                  alt={e.title}
                />
                <h3>{e.title}</h3>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </section>
    </>
  );
}
