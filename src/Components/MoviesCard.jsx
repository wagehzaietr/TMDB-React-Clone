import React, { useContext, useState } from "react";
import "../Styles/MoviesCard.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MoviesCard = ({
  title,
  poster_path,
  vote_average,
  i,
  release_date,
  movie,
  overview,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="container">
        <div key={i} className="Card" onClick={handleClick}>
          {poster_path ? (
            <img
              className="card-img-top"
              style={{ width: "100%" }}
              src={API_IMG + poster_path}
            />
          ) : (
            <h3>No image Found</h3>
          )}
          <p className="card-title">{title}</p>
          <p className="card-text">Date:{release_date}</p>
          <span>Rate:{vote_average}⭐</span>
        </div>
      </div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        className="overview"
      >
        <Modal.Header closeButton className="overview-header"></Modal.Header>
        <img src={API_IMG + poster_path} alt="" />
        <Modal.Title>{title}</Modal.Title>
        <Modal.Body>{overview}</Modal.Body>
        <Modal.Body>Rate:{vote_average}</Modal.Body>
      </Modal>
    </>
  );
};

export default MoviesCard;
