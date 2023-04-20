import React, { useContext } from "react";
import styled from "styled-components";
import "../Styles/Footer.css";
import footerlogo from "../assets/footerlogo.svg";
import Wave from 'react-wavify'
import { SearchMoviesContext } from "../App";

const Footer = () => {
  const {user,userData} = useContext(SearchMoviesContext)
  return (
    <>
     <Wave fill='#032541'
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.20,
          points: 4
        }}
  />
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-logo">
                <img src={footerlogo} alt="logo" />
                <button className="footer-btn">Hi {userData.email}</button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-links">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-social">
                <ul>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-social">
                <ul>
                  <li>
                    <a href="#">AboutTMDB</a>
                  </li>
                  <li>
                    <a href="#">ContactUs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
