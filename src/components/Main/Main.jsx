import "./Main.css";
import About from "../About/About";
import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import { useContext } from "react";
import { searchResultContext } from "../../contexts/searchResultContext";
import { hasSearchedContext } from "../../contexts/hasSearchedContext";
import { currentUserContext } from "../../contexts/currentUserContext";

function Main({
  searchError,
  isLoading,
  handleSearch,
  handleRemoveArticle,
  handleSaveArticle,
  onLoginClick,
  onLogout,
  onRegisterClick,
}) {
  const { searchResult } = useContext(searchResultContext);
  const { hasSearched } = useContext(hasSearchedContext);
  const { isLoggedIn } = useContext(currentUserContext);

  return (
    <>
      <Header
        onLoginClick={onLoginClick}
        onLogout={onLogout}
        onRegisterClick={onRegisterClick}
        handleSearch={handleSearch}
      />
      <main className="main">
        <div className="main__content">
          {isLoading ? (
            <Preloader />
          ) : hasSearched && searchResult.length > 0 ? (
            <NewsCardList
              onLoginClick={onLoginClick}
              handleSaveArticle={handleSaveArticle}
              handleRemoveArticle={handleRemoveArticle}
            />
          ) : hasSearched && searchResult.length === 0 ? (
            <NotFound />
          ) : searchError === true ? (
            <p className="main__error-message">
              Sorry, something went wrong during the request. There may be a
              connection issue or the server may be down. Please try again
              later.
            </p>
          ) : (
            ""
          )}
        </div>
        <About />
      </main>
    </>
  );
}

export default Main;
