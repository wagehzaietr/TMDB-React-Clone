import React, { useState, useContext, useEffect } from "react";
import "../Styles/Navbar.css";
import Logo from "../assets/logo.svg";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { SearchMoviesContext } from "../App";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/Firebase";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const searchMoviesContext = useContext(SearchMoviesContext);
  const navigate = useNavigate();
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
  const [user, setUser] = useState(false);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setUser(user);
      } else {
        navigate("/login")
        setUser(false);
      }
    });

    // Unsubscribe from the listener when component unmounts
    return unsubscribe;
  }, [auth]);

  const handleLogout = () => {
    auth.signOut();
  };

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
          <Link to="/">
            <img src={Logo} alt="" width="150px" className="logo" />
          </Link>
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
          {user ? (
            <button className="login-btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="login-btn">
              <Link to="/login" className="link">
                Login
              </Link>
            </button>
          )}
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
          <FaSearch
            className={isOpen ? "FaSearch" : "FaSearch-close"}
            onClick={SeacrhMovies}
          />
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
