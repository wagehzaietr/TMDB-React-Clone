import React, { useContext, useEffect } from "react";
import "../Styles/MainPage.css";
import { SearchMoviesContext } from "../App";



const MainPage = () => {
  const searchMoviesContext = useContext(SearchMoviesContext);
  const {
    handleSearchInputChange,
    handleSearchFormSubmit,
    searchQuery,
    Movie,
    searchResults,
    handleSearchIconClick,
    SeacrhMovies,
  } = searchMoviesContext;
  return (
    <div className="landing">
      <h1>Welcome.</h1>
      <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
      <div className="search-input">
        <input
          type="text"
          placeholder="Search for movies."
          className="search-bar"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="Submit" className="search-submit" onClick={SeacrhMovies}>Seacrh</button>
      </div>
    </div>
  );
};

export default MainPage;
