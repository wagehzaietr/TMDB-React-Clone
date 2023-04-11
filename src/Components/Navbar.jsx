import React, { useState, useContext } from "react";
import "../Styles/Navbar.css";
import Logo from "../assets/logo.svg";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { SearchMoviesContext } from "../App";
import { Link } from "react-router-dom";


const Navbar = () => {
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
  const [isOpen, setIsOpen] = useState(false);
  const [sidenav, setsidenav] = useState(false);


  const toggleSidebar = () => {
    setsidenav(!sidenav);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="left-nav">
          <img src={Logo} alt="" width="150px" className="logo" />
          <ul>
            <li>Movies</li>
            <li>TVShows</li>
            <li>People</li>
            <li>More</li>
          </ul>
        </div>

        <div className="right-nav">
          <AiOutlinePlus className="plus-icon" />
          <button className="btn">EN</button>
          <IoIosNotifications className="notif" />
          <div className="circle">w</div>
          {isOpen ? (
            <AiOutlineClose onClick={toggle} className="close-icon" />
          ) : (
            <FaSearch onClick={toggle} className="search-icon" />
          )}
        </div>
      </nav>
      <form onSubmit={handleSearchFormSubmit}>
        <div className="search-box">
          <input
            type="text"
            className={`input ${isOpen ? "open" : "close"}`}
            placeholder="Search for movies"
            value={searchQuery}
            onChange={handleSearchInputChange}
            disabled={!isOpen}
          />
          <FaSearch className={isOpen ?'FaSearch' : 'FaSearch-close'} onClick={SeacrhMovies} />
        </div>
      </form>
      <div className="mobile-nav">
        {sidenav ? (
          <AiOutlineClose onClick={toggleSidebar} className="active-menu" />
        ) : (
          <AiOutlineMenu onClick={toggleSidebar} className="active-menu" />
        )}
        <img src={Logo} alt="" width="150px" />
      </div>
      <div className={sidenav ? "nav-items active" : "nav-items"}>
        <ul>
          <li>Movies</li>
          <li>TVShows</li>
          <li>People</li>
          <li>More</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
