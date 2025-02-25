import "./NewsCard.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { keywordContext } from "../../contexts/keyWordContext";
import { savedArticlesContext } from "../../contexts/savedArticlesContext";
import { currentPageContext } from "../../contexts/currentPageContext";
import { currentUserContext } from "../../contexts/currentUserContext";
import { useContext, useEffect, useState } from "react";

function NewsCard({
  newsData,
  handleSaveArticle,
  handleRemoveArticle,
  onClick,
}) {
  let formattedDate;

  if (newsData.publishedAt) {
    formattedDate = new Date(newsData.publishedAt).toLocaleDateString(
      "default",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );
  } else {
    formattedDate = "";
  }

  const location = useLocation();

  const { currentPage, setCurrentPage } = useContext(currentPageContext);
  const { savedArticles } = useContext(savedArticlesContext);
  const { keyword } = useContext(keywordContext);
  const { isLoggedIn } = useContext(currentUserContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleBookmarkClick = () => {
    handleSaveArticle({ newsData, keyword });
  };

  const handleRemoveClick = () => {
    handleRemoveArticle({ newsData });
  };

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname, setCurrentPage]);

  return (
    <div className="news-card__container">
      <div className="news-card__image-container">
        {currentPage === "/saved-news" && (
          <div className="news-card__keyword-icon">{newsData.keyword}</div>
        )}

        <div className="news-card__btns">
          {!isLoggedIn && currentPage === "/" && (
            <div className="news-card__sign-in-icon">
              <div
                className={`news-card__popup-text ${
                  isHovered ? "" : "news-card__popup-text--hidden"
                }`}>
                Sign in to save articles
              </div>
              <button
                className="news-card__button-bookmark"
                onClick={onClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </div>
          )}

          {isLoggedIn && currentPage === "/" && (
            <button
              className={
                savedArticles.some(
                  (savedArticles) => savedArticles.link === newsData.url
                )
                  ? "news-card__save_active news-card__save"
                  : "news-card__save"
              }
              onClick={
                newsData.isSaved ? handleRemoveClick : handleBookmarkClick
              }
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          )}

          {currentPage === "/saved-news" && (
            <button
              className="news-card__delete"
              onClick={handleRemoveClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          )}
        </div>

        {newsData.urlToImage && (
          <img
            className="news-card__image"
            src={newsData.urlToImage}
            alt={newsData.title}
          />
        )}
      </div>

      <div className="news-card__text">
        <span className="news-card__date">{formattedDate}</span>
        <Link
          to={newsData.url}
          target="_blank"
          rel="noreferrer"
          className="news-card__title-link">
          <h2 className="news-card__title">{newsData.title}</h2>
        </Link>
        <p className="news-card__description">
          {newsData.text || newsData.description}
        </p>
        <span className="news-card__source">
          {
            (typeof newsData.source === "string"
              ? newsData.source
              : newsData.source.name || "Unknown Source"
            )
              .toUpperCase()
              .split(".")[0]
          }
        </span>
      </div>
    </div>
  );
}

export default NewsCard;
