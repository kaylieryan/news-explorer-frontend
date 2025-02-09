import "./SearchForm.css";
import { useContext } from "react";
import { keywordContext } from "../../contexts/keyWordContext";

function SearchForm({ handleSearch }) {
  const { keyword, setkeyword } = useContext(keywordContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(keyword);
  };

  const handleKeyWord = (event) => {
    setkeyword(event.target.value);
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="search__input-container">
          <input
            className="search__input"
            type="text"
            id="search"
            value={keyword}
            placeholder="Enter Topic"
            maxLength="20"
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
