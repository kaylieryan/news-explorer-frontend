import "./Navigation.css";
import headerWhiteLogo from "../../assets/headerWhiteLogo.svg";
import headerBlackLogo from "../../assets/headerBlackLogo.svg";
import logOutBlack from "../../assets/logout_black.svg";
import logOutWhite from "../../assets/logout_white.svg";
import { NavLink } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useContext } from "react";
import { currentPageContext } from "../../contexts/currentPageContext";
import { mobileContext } from "../../contexts/mobileContext";
import { currentUserContext } from "../../contexts/currentUserContext";

function Navigation({ onLoginClick, onLogout }) {
  const { currentPage, activeModal } = useContext(currentPageContext);
  const { currentUser, isLoggedIn } = useContext(currentUserContext);
  const { mobileMenuOpen, openMobileMenu, closeMobileMenu } =
    useContext(mobileContext);

  const handleMobileMenu = () => {
    if (mobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  return (
    <nav
      className={`navigation ${
        currentPage === "/saved-news" ? "navigation--saved-news" : ""
      } ${mobileMenuOpen ? "navigation--menu-open" : ""}`}>
      <nav>
        {currentPage === "/" || mobileMenuOpen ? (
          <NavLink to="/">
            <img
              src={headerWhiteLogo}
              alt="NewsExplorer White Logo"
              className="navigation__logo navigation__logo--white"
            />
          </NavLink>
        ) : (
          <NavLink to="/">
            <img
              src={headerBlackLogo}
              alt="NewsExplorer Black Logo"
              className="navigation__logo navigation__logo--black"
            />
          </NavLink>
        )}
      </nav>
      {currentPage === "/" ? (
        <button
          className={`navigation__menu-button ${
            activeModal === "" ? "navigation__menu-button--hidden" : ""
          } ${mobileMenuOpen === true ? "navigation__menu-button--close" : ""}`}
          onClick={handleMobileMenu}
        />
      ) : (
        <button
          className={`navigation__menu-button navigation__menu-button--saved-news ${
            activeModal === "" ? "navigation__menu-button--hidden" : ""
          } ${mobileMenuOpen === true ? "navigation__menu-button--close" : ""}`}
          onClick={handleMobileMenu}
        />
      )}

      {mobileMenuOpen && (
        <MobileMenu onLoginClick={onLoginClick} onLogout={onLogout} />
      )}

      {isLoggedIn && currentPage === "/" ? (
        <nav className="navigation__user-container">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navigation__link navigation__link--home ${
                isActive ? "navigation__link--active" : ""
              }`
            }>
            Home
          </NavLink>
          <NavLink
            to="/saved-news"
            className={({ isActive }) =>
              `navigation__link navigation__link--saved ${
                isActive ? "navigation__link--active" : ""
              }`
            }>
            Saved Articles
          </NavLink>
          <button
            className={`navigation__button-loggedin ${
              currentPage === "/" ? "navigation__button-loggedin--white" : ""
            }`}
            onClick={onLogout}>
            <span className="navigation__username">{currentUser.name}</span>
            <img
              src={currentPage === "/" ? logOutWhite : logOutBlack}
              alt="logout"
              className="navigation__logout-icon"
            />
          </button>
        </nav>
      ) : isLoggedIn && currentPage === "/saved-news" ? (
        <nav className="navigation__user-container">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navigation__link navigation__link--home navigation__link--black ${
                isActive ? "navigation__link--active" : ""
              }`
            }>
            Home
          </NavLink>
          <NavLink
            to="/saved-news"
            className={({ isActive }) =>
              `navigation__link navigation__link--saved navigation__link--black ${
                isActive ? "navigation__link--active" : ""
              }`
            }>
            Saved Articles
          </NavLink>
          <button
            className={`navigation__button-loggedin navigation__button-loggedin--black ${
              currentPage === "/" ? "navigation__button-loggedin" : ""
            }`}
            onClick={onLogout}>
            <span className="navigation__username">{currentUser.name}</span>
            <img
              src={currentPage === "/" ? logOutWhite : logOutBlack}
              alt="logout"
              className="navigation__logout-icon"
            />
          </button>
        </nav>
      ) : (
        <div
          className={`navigation__buttons ${
            mobileMenuOpen ? "navigation__buttons--menu-open" : ""
          }`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navigation__link navigation__link--home ${
                isActive ? "navigation__link--active" : ""
              }`
            }>
            Home
          </NavLink>
          <button className="navigation__button-signin" onClick={onLoginClick}>
            Sign in
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
