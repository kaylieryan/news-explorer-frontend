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
    <div className="search-form">
      <form className="search-form__container" onSubmit={handleSubmit}>
        <div className="search-form__field">
          <input
            className="search-form__input"
            type="text"
            id="search"
            value={keyword}
            placeholder="Enter Topic"
            onChange={handleKeyWord}
            required
          />
          <button type="submit" className="search-form__button">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
