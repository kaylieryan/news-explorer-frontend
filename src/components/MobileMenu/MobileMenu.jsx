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
      <div className="mobile-menu__content">
        <div className="mobile-menu__header">
          <NavLink to="/" className="mobile-menu__logo-link" onClick={onClose}>
            <img
              src={currentPage === "/" ? headerWhiteLogo : headerBlackLogo}
              alt="NewsExplorer Logo"
              className="mobile-menu__logo"
            />
          </NavLink>
          <button className="mobile-menu__close-button" onClick={onClose}>
            <span className="mobile-menu__close-button-line"></span>
            <span className="mobile-menu__close-button-line"></span>
          </button>
        </div>

        <div className="mobile-menu__nav">
          <NavLink
            to="/"
            className={`mobile-menu__link ${
              currentPage === "/" ? "mobile-menu__link--active" : ""
            }`}
            onClick={onClose}>
            Home
          </NavLink>

          {isLoggedIn && (
            <NavLink
              to="/saved-news"
              className={`mobile-menu__link ${
                currentPage === "/saved-news" ? "mobile-menu__link--active" : ""
              }`}
              onClick={onClose}>
              Saved articles
            </NavLink>
          )}

          {isLoggedIn ? (
            <button
              className={`mobile-menu__button mobile-menu__button--logged-in ${
                currentPage === "/"
                  ? "mobile-menu__button--white"
                  : "mobile-menu__button--black"
              }`}
              onClick={() => {
                onLogout();
                onClose();
              }}>
              <span className="mobile-menu__username">{currentUser.name}</span>
              <img
                src={currentPage === "/" ? logOutWhite : logOutBlack}
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
