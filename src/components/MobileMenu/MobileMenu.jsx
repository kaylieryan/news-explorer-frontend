import "./MobileMenu.css";
import { NavLink } from "react-router-dom";
import headerWhiteLogo from "../../assets/headerWhiteLogo.svg";
import headerBlackLogo from "../../assets/headerBlackLogo.svg";

function MobileMenu({
  isOpen,
  currentPage,
  isLoggedIn,
  currentUser,
  onLoginClick,
  onLogout,
  onClose,
  logOutWhite,
  logOutBlack,
}) {
  return (
    <div className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>
      <div
        className={`mobile-menu__content ${
          isLoggedIn && currentPage === "/saved-news"
            ? "mobile-menu__content--logged-in"
            : ""
        }`}>
        <div
          className={`mobile-menu__header ${
            isLoggedIn && currentPage === "/saved-news"
              ? "mobile-menu__header--logged-in"
              : ""
          }`}>
          <NavLink to="/" className="mobile-menu__logo-link" onClick={onClose}>
            <img
              src={
                isLoggedIn && currentPage === "/saved-news"
                  ? headerBlackLogo
                  : headerWhiteLogo
              }
              alt="NewsExplorer Logo"
              className="mobile-menu__logo"
            />
          </NavLink>
          <button
            className={`mobile-menu__close-button ${
              isLoggedIn && currentPage === "/saved-news"
                ? "mobile-menu__close-button--logged-in"
                : ""
            }`}
            onClick={onClose}>
            <span className="mobile-menu__close-button-line"></span>
            <span className="mobile-menu__close-button-line"></span>
          </button>
        </div>

        <div className="mobile-menu__nav">
          <NavLink
            to="/"
            className={`mobile-menu__link ${
              currentPage === "/" ? "mobile-menu__link--active" : ""
            } ${isLoggedIn ? "mobile-menu__link--logged-in" : ""}`}
            onClick={onClose}>
            Home
          </NavLink>

          {isLoggedIn && (
            <NavLink
              to="/saved-news"
              className={`mobile-menu__link ${
                currentPage === "/saved-news" ? "mobile-menu__link--active" : ""
              } ${
                isLoggedIn && currentPage === "/saved-news"
                  ? "mobile-menu__link--logged-in"
                  : ""
              }`}
              onClick={onClose}>
              Saved articles
            </NavLink>
          )}

          {isLoggedIn ? (
            <button
              className={`mobile-menu__button mobile-menu__button--logged-in ${
                currentPage === "/saved-news"
                  ? "mobile-menu__button--black"
                  : "mobile-menu__button--white"
              }`}
              onClick={() => {
                onLogout();
                onClose();
              }}>
              <span className="mobile-menu__username">{currentUser.name}</span>
              <img
                src={currentPage === "/saved-news" ? logOutBlack : logOutWhite}
                alt="logout"
                className="mobile-menu__logout-icon"
              />
            </button>
          ) : (
            <button
              className="mobile-menu__button mobile-menu__button--sign-in"
              onClick={() => {
                onLoginClick();
                onClose();
              }}>
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
