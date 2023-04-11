import React, { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  MoviesCard,
  Navbar,
  MainPage,
  TVShows,
  Loader,
  MovieSlider,
  Footer,
} from "./index";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=46636ef69c97ede39b4c71a2b305ef92";

export const SearchMoviesContext = createContext();

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=46636ef69c97ede39b4c71a2b305ef92&query=${searchQuery}`
    );
    const data = await response.json();
    setSearchResults(data.results);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    event.preventDefault();
  };

  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    searchMovies();
  };

  const SeacrhMovies = () => {
    searchMovies(searchQuery);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMovies(data.results);
      setLoading(false);
    };
    fetchMovies();
  }, []);
  return (
    <>
      <SearchMoviesContext.Provider
        value={{
          movies,
          loading,
          searchMovies,
          searchQuery,
          searchResults,
          handleSearchInputChange,
          handleSearchFormSubmit,
          SeacrhMovies,
        }}
      >
        <Navbar />
        <MainPage />
        {loading ? <Loader /> : <MovieSlider />}
        <TVShows />
        <Footer />
      </SearchMoviesContext.Provider>
    </>
  );
};

export default App;
