import "./SearchForm.css";
import { useContext } from "react";
import { keywordContext } from "../../contexts/keyWordContext";
import { hasSearchedContext } from "../../contexts/hasSearchedContext";

function SearchForm({ handleSearch }) {
  const { keyword, setkeyword } = useContext(keywordContext);
  const { setHasSearched } = useContext(hasSearchedContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(keyword);
    setHasSearched(true); // Update the hasSearched context
  };

  const handleKeyWord = (event) => {
    setkeyword(event.target.value);
  };

  return (
    <div className="search">
      <form action="" onSubmit={handleSubmit} className="search__form">
        <div className="search__input-container">
        <input
          className="search__input"
          type="text"
          id="search"
          value={keyword}
          placeholder="Enter Topic"
          onChange={handleKeyWord}
          required
        />
        <button type="submit" className="search__submit-button">
          Search
        </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
