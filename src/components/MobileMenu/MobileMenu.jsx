import "./MobileMenu.css";
import logOutWhite from "../../assets/logout_white.svg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { currentUserContext } from "../../contexts/currentUserContext";

const MobileMenu = ({ onLoginClick, onLogout, onCloseMenu }) => {
  const { isLoggedIn, currentUser } = useContext(currentUserContext);

  const handleCloseMenu = () => {
    onCloseMenu();
  };

  return (
    <nav className="mobile">
      <div className="mobile__content">
        <div className="mobile__links">
          <div className="mobile__title" onClick={handleCloseMenu}>
            NewsExplorer
          </div>
          <button
            className="mobile__close-button"
            onClick={handleCloseMenu}></button>

          <NavLink to="/" className="mobile__link" onClick={handleCloseMenu}>
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink
              to="/saved-news"
              className="mobile__link"
              onClick={handleCloseMenu}>
              Saved articles
            </NavLink>
          )}
          {isLoggedIn ? (
            <button
              className="mobile__button--state-logged-in"
              onClick={onLogout}>
              <p className="mobile__username">{currentUser.name}</p>
              <img src={logOutWhite} alt="logout" className="mobile__icon" />
            </button>
          ) : (
            <button className="mobile__button" onClick={onLoginClick}>
              Sign in
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MobileMenu;
