import "./Footer.css";
import githubLogo from "../../assets/github.svg";
import facebookLogo from "../../assets/facebook.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">© Supersite, Powered by News API</p>
      <div className="footer__social">
        <nav className="footer__nav">
          <a href="/" className="footer__link">
            Home
          </a>

          <a
            href="https://tripleten.com/"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer">
            TriplenTen
          </a>
        </nav>

        <div className="footer__media">
          <a
            href="https://github.com/kaylieryan"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={githubLogo}
              alt="GitHub Logo"
              className="footer__github-icon"
            />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={facebookLogo}
              alt="Facebook Logo"
              className="footer__fb-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
