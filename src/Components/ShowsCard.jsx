import React, { useState } from "react";
import "../Styles/modal.css";
import { Modal } from "react-bootstrap";

const ShowsCard = ({

  first_air_date,
  overview,
  name,
  id,
  poster_path,
  vote_average,
}) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    
    <>
      <div className="container" onClick={handleClick}>
        <div key={id} className="Card">
          <img
            className="card-img-top"
            style={{ width: "100%" }}
            src={API_IMG + poster_path}
            alt={name}
          />
          <p className="card-title">{name}</p>
          <p className="card-text">Date:{first_air_date}</p>
          <span>Rate:{vote_average}⭐</span>
        </div>
      </div>

      {/* modal */}

      <Modal show={showModal} onHide={() => setShowModal(false)} className="overview">
        <Modal.Header closeButton className="overview-header">
        </Modal.Header>
          <img src={API_IMG+poster_path} alt=""/>
          <Modal.Title>{name}</Modal.Title>
        <Modal.Body>{overview}</Modal.Body>
        <Modal.Body>Rate:{vote_average}</Modal.Body>
      </Modal>
    </>
  );
};
export default ShowsCard;
