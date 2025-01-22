
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__nav-container">
        <div className="header__text-container">
          <h1 className="header__title">What's going on in the world?</h1>
          <h2 className="header__subtitle">
            Find the latest news on any topic and save them in your personal
            account
          </h2>
        </div>
        <div className="header__logo">NewsExplorer</div>
        <nav className="header__nav">
          <Link to="/" className="header__link">
            Home
          </Link>
          <button className="header__button">Sign In</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
