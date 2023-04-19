import React, { useContext } from "react";
import MainPage from "./MainPage";
import MovieSlider from "./MovieSlider";
import TVShows from "./TVShows";
import Loader from "./Loader";
import { SearchMoviesContext } from "../App";


const MainLanding = () => {
    const {loading} = useContext(SearchMoviesContext)
  return (
    <>
      <MainPage />
      {loading ? <Loader /> : <MovieSlider />}
      <TVShows />
    </>
  );
};

export default MainLanding;
