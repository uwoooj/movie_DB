import axios from "axios";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BrowserRouter, Link } from "react-router-dom";

import "swiper/css";

const API_KEY = "f89a6c1f22aca3858a4ae7aef10de967"; // 실제 API 키로 변경
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
const SMALL_IMAGE_SIZE = "w200";
const ORIGINAL_IMAGE = "https://image.tmdb.org/t/p/original/";

function Home() {
  const [trendingMovies, setTrendingMovies] = React.useState([]);
  const [topRatedMovies, setTopRatedMovies] = React.useState([]);
  const [trendingTv, setTrendingTv] = React.useState([]);
  const [topRatedTv, setTopRatedTv] = React.useState([]);
  const MIDDLE_IMAGE_SIZE = "w400";
  const LARGE_IMAGE_SIZE = "w500";

  console.log(trendingMovies);
  React.useEffect(() => {
    // Trending Movies
    axios
      .get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
      .then((response) => {
        setTrendingMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });

    // Top Rated Movies
    axios
      .get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`)
      .then((response) => {
        setTopRatedMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });

    // Trending TV Shows
    axios
      .get(`${BASE_URL}/trending/tv/week?api_key=${API_KEY}`)
      .then((response) => {
        setTrendingTv(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });

    // Top Rated TV Shows
    axios
      .get(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}`)
      .then((response) => {
        setTopRatedTv(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="wrap">
      <Swiper className="mySwiper main-list">
        {trendingMovies.map((movie) => (
          <SwiperSlide className="main-list2" key={movie.id}>
            <div className="main-list2-1">
              {/* Link 컴포넌트를 사용하여 영화 상세 페이지로 이동 */}
              <Link to={`/movie/${movie.id}`}></Link>
              <div className="p_wrap">
                <div className="main-list3">
                  <h3>{movie.original_title}</h3>
                  <p>{movie.overview}</p>

                  <div className="main-list4">
                    <button>Watch Now</button>
                    <button>Watch trailer</button>
                  </div>
                </div>

                <img
                  className="main-poster"
                  src={`${IMAGE_BASE_URL}${MIDDLE_IMAGE_SIZE}${movie.poster_path}`}
                  alt={[]}
                />
              </div>
            </div>
            <figure className="main-background1">
              <img
                className="main-background2"
                src={`${ORIGINAL_IMAGE}${movie.backdrop_path}`}
                alt={[]}
              />
              <div class="gradient-overlay"></div>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>

      <h2 className="title">Trending Movies</h2>
      <Swiper
        className="mySwiper movie-list"
        slidesPerView={6.5}
        spaceBetween={5}
      >
        {trendingMovies.map((movie) => (
          <SwiperSlide className="movie-list2" key={movie.id}>
            <Link to={`movie/${movie.id}`}>
              <img
                src={`${IMAGE_BASE_URL}${SMALL_IMAGE_SIZE}${movie.poster_path}`}
                alt={`${movie.title} Poster`}
              />
            </Link>
            <h3>{movie.title}</h3>
          </SwiperSlide>
        ))}
      </Swiper>

      <h2 className="title">Top_Rated Movies</h2>
      <Swiper
        className="mySwiper movie-list"
        slidesPerView={6.5}
        spaceBetween={20}
      >
        {topRatedMovies.map((movie) => (
          <SwiperSlide className="movie-list2" key={movie.id}>
            <img
              src={`${IMAGE_BASE_URL}${SMALL_IMAGE_SIZE}${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
            <h3>{movie.title}</h3>
          </SwiperSlide>
        ))}
      </Swiper>

      <h2 className="title">Trending TV</h2>
      <Swiper
        className="mySwiper movie-list"
        slidesPerView={6.5}
        spaceBetween={20}
      >
        {trendingTv.map((movie) => (
          <SwiperSlide className="movie-list2" key={movie.id}>
            <img
              src={`${IMAGE_BASE_URL}${SMALL_IMAGE_SIZE}${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
            <h3>{movie.title}</h3>
          </SwiperSlide>
        ))}
      </Swiper>

      <h2 className="title">Top Rated TV</h2>
      <Swiper
        className="mySwiper movie-list"
        slidesPerView={6.5}
        spaceBetween={20}
      >
        {topRatedTv.map((movie) => (
          <SwiperSlide className="movie-list2" key={movie.id}>
            <img
              src={`${IMAGE_BASE_URL}${SMALL_IMAGE_SIZE}${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
            <h3>{movie.title}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Home;
