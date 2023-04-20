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
import { HiOutlineLogout } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";

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
    userData,
    setLoading,
    loading,
  } = searchMoviesContext;
  const [isOpen, setIsOpen] = useState(false);
  const [sidenav, setsidenav] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/");
        setUser(false);
      }
    });

    // Unsubscribe from the listener when component unmounts
    return unsubscribe;
  }, [auth]);

  const handleLogout = () => {
    auth.signOut();
    setsidenav(false);
    window.location.reload();
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
            <button onClick={handleLogout} className="login-btn">
              <HiOutlineLogout size={24} color="#e8e8e8" />
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
        <Link to="/">
          <img src={Logo} alt="" width="150px" />
        </Link>
      </div>
      <div className={sidenav ? "nav-items active" : "nav-items"}>
        <ul>
          <li>
            {user ? (
              <button className="login-mobile" onClick={handleLogout}>
                <HiOutlineLogout size={30} color="#fff" />
              </button>
            ) : (
              <button className="login-mobile">
                <Link
                  to="/login"
                  className="link-mobile"
                  onClick={() => setsidenav(false)}
                >
                  Login
                </Link>
              </button>
            )}
          </li>
          <Link
            to="/"
            className="link-mobile"
            onClick={() => setsidenav(false)}
          >
            <li>Movies</li>
          </Link>
          <li>TVShows</li>
          <li>People</li>
          <li>More</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
