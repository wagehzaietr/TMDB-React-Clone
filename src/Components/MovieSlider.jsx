import React,{useContext} from "react";
import Slider from "react-slick";
import { MoviesCard } from "../index";
import { SearchMoviesContext } from "../App";

const MovieSlider = () => {
  const { movies,searchResults } = React.useContext(SearchMoviesContext);
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 8,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",


    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="contain">
      <h4>Trending Movies</h4>
      <Slider {...settings}>
        {(searchResults.length === 0 ? movies : searchResults).map((movie, i) => {
          return <MoviesCard key={i} {...movie} />;
        })}
      </Slider>
    </div>
  );
};

export default MovieSlider;