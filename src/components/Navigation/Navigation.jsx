import "../Navigation/Navigation.css";
import NavLoggedIn from "../NavLoggedIn/NavLoggedIn";
import NavLoggedOut from "../NavLoggedOut/NavLoggedOut";
import Main from "../Main/Main";
import { useState } from "react";

function Nav({ handleLoginClick, isInverse, isLoggedIn, handleLogout }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleMainClick = () => {
    setIsClicked(true);
  };

  const handleMainCloseClick = () => {
    setIsClicked(false);
  };

  return (
    <nav className="nav" data-theme={isInverse ? "light" : "dark"}>
      <p className="nav__logo">NewsExplorer</p>
      <button
        onClick={handleMainClick}
        className={
          isInverse ? "nav__menu-btn nav__menu-btn--black" : "nav__menu-btn"
        }></button>

      {!isLoggedIn ? (
        <NavLoggedOut handleLoginClick={handleLoginClick} />
      ) : (
        <NavLoggedIn isInverse={isInverse} handleLogout={handleLogout} />
      )}
      {isClicked ? (
        <Main
          isLoggedIn={isLoggedIn}
          onClose={handleMainCloseClick}
          handleLoginClick={handleLoginClick}
          handleLogout={handleLogout}
        />
      ) : null}
    </nav>
  );
}

export default Nav;
