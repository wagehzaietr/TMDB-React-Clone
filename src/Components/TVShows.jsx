import { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShowsCard from "./ShowsCard";
import { SearchMoviesContext } from "../App";
import { Loader } from "./Loader";

const TVShows = () => {
  const { loading, setLoading } = useContext(SearchMoviesContext);
  const [shows, setShows] = useState([]);
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  const API_KEY = "46636ef69c97ede39b4c71a2b305ef92";
  const TV_SHOWS_API = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`;

  useEffect(() => {
    const fetchTVShows = async () => {
      const response = await fetch(TV_SHOWS_API);
      const data = await response.json();
      setShows(data.results);
    };

    fetchTVShows();
  }, [TV_SHOWS_API]);

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 8,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 6000,
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
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="contain">
          <h4>Popular Tv Shows</h4>
          <Slider {...settings}>
            {shows.map((show) => {
              return <ShowsCard key={show.id} {...show} />;
            })}
          </Slider>
        </div>
      )}
    </>
  );
};

export default TVShows;
