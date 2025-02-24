import "./Navigation.css";
import headerWhiteLogo from "../../assets/headerWhiteLogo.svg";
import headerBlackLogo from "../../assets/headerBlackLogo.svg";
import logOutBlack from "../../assets/logout_black.svg";
import logOutWhite from "../../assets/logout_white.svg";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { currentPageContext } from "../../contexts/currentPageContext";
import { currentUserContext } from "../../contexts/currentUserContext";

function Navigation({ onLoginClick, onLogout }) {
  const { currentPage } = useContext(currentPageContext);
  const { currentUser, isLoggedIn } = useContext(currentUserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`navigation ${
        currentPage === "/saved-news" ? "navigation--saved-news" : ""
      }`}>
      <div className="navigation__container">
        <NavLink
          to="/"
          className="navigation__logo-link"
          onClick={handleMenuClose}>
          <img
            src={currentPage === "/" ? headerWhiteLogo : headerBlackLogo}
            alt="NewsExplorer Logo"
            className={`navigation__logo ${
              currentPage === "/"
                ? "navigation__logo--white"
                : "navigation__logo--black"
            }`}
          />
        </NavLink>

        <button
          className={`navigation__menu-button ${
            menuOpen ? "navigation__menu-button--open" : ""
          } ${
            currentPage === "/saved-news"
              ? "navigation__menu-button--black"
              : ""
          }`}
          onClick={handleMenuToggle}>
          <span className="navigation__menu-button-line"></span>
          <span className="navigation__menu-button-line"></span>
        </button>
      </div>

      <div
        className={`navigation__menu ${
          menuOpen ? "navigation__menu--open" : ""
        }`}>
        <div className="navigation__menu-content">
          <div className="navigation__mobile-logo">
            <img
              src={headerWhiteLogo}
              alt="NewsExplorer Logo"
              className="navigation__logo navigation__logo--white"
            />
          </div>

          <button 
            className="navigation__close-button"
            onClick={handleMenuClose}
            aria-label="Close menu"
          />

          <NavLink
            to="/"
            className={`navigation__link ${
              currentPage === "/"
                ? "navigation__link--active navigation__link--home"
                : ""
            }`}
            onClick={handleMenuClose}>
            Home
          </NavLink>

          {isLoggedIn && (
            <NavLink
              to="/saved-news"
              className={`navigation__link ${
                currentPage === "/saved-news"
                  ? "navigation__link--active navigation__link--saved"
                  : ""
              } ${
                currentPage === "/saved-news" ? "navigation__link--black" : ""
              }`}
              onClick={handleMenuClose}>
              Saved articles
            </NavLink>
          )}

          {isLoggedIn ? (
            <button
              className={`navigation__button navigation__button--logged-in ${
                currentPage === "/"
                  ? "navigation__button--logged-in-white"
                  : "navigation__button--logged-in-black"
              }`}
              onClick={() => {
                onLogout();
                handleMenuClose();
              }}>
              <span className="navigation__username">{currentUser.name}</span>
              <img
                src={currentPage === "/" ? logOutWhite : logOutBlack}
                alt="logout"
                className="navigation__logout-icon"
              />
            </button>
          ) : (
            <button
              className="navigation__button navigation__button--sign-in"
              onClick={() => {
                onLoginClick();
                handleMenuClose();
              }}>
              Sign in
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
