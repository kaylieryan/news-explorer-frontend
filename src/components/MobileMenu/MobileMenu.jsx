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
          isLoggedIn ? "mobile-menu__content--logged-in" : ""
        }`}>
        <div
          className={`mobile-menu__header ${
            isLoggedIn ? "mobile-menu__header--logged-in" : ""
          }`}>
          <NavLink to="/" className="mobile-menu__logo-link" onClick={onClose}>
            <img
              src={isLoggedIn ? headerBlackLogo : headerWhiteLogo}
              alt="NewsExplorer Logo"
              className="mobile-menu__logo"
            />
          </NavLink>
          <button
            className={`mobile-menu__close-button ${
              isLoggedIn ? "mobile-menu__close-button--logged-in" : ""
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
              } ${isLoggedIn ? "mobile-menu__link--logged-in" : ""}`}
              onClick={onClose}>
              Saved articles
            </NavLink>
          )}

          {isLoggedIn ? (
            <button
              className={`mobile-menu__button mobile-menu__button--logged-in mobile-menu__button--black`}
              onClick={() => {
                onLogout();
                onClose();
              }}>
              <span className="mobile-menu__username">{currentUser.name}</span>
              <img
                src={logOutBlack}
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
