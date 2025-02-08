import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({ onLoginClick, onLogout, onRegisterClick, handleSearch }) {
  return (
    <>
      <header className="header">
        <Navigation
          onLoginClick={onLoginClick}
          onLogout={onLogout}
          onRegisterClick={onRegisterClick}
        />
        <div className="header__content">
          <h1 className="header__header">What's going on in the world?</h1>
          <p className="header__subHeader">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm handleSearch={handleSearch} />
        </div>
      </header>
    </>
  );
}

export default Header;
