import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Movies from "./page/Movies";
import TvSeries from "./page/Tvseries";
import "./App.css";
import React, { useState, useEffect } from "react";

import MovieDetail from "./page/MovieDetail"; // 새로운 컴포넌트 import

function App() {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 100) {
        // Adjust this value as needed
        setIsHeaderTransparent(false);
      } else {
        setIsHeaderTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = {
    width: "100%",
    height: "100px",
    position: "fixed",
    top: 0,
    padding: "0 2rem",
    zIndex: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: isHeaderTransparent ? "transparent" : "rgb(8, 8, 8)",
    transition: "background-color 0.3s ease",
  };

  return (
    <Router>
      <div>
        <div className="main">
          <header className="header" style={headerStyle}>
            <h1 className="logo">
              <a href="/">YFLX</a>
            </h1>

            <nav className="menu-wrap">
              <ul className="menu">
                <li>
                  <Link to="/" className="header-style">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/movies" className="header-style">
                    Movies
                  </Link>
                </li>
                <li>
                  <Link to="/tv-series" className="header-style">
                    TV Series
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-series" element={<TvSeries />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
