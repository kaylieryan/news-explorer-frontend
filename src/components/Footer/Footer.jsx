import "./Footer.css";
import githubLogo from "../../assets/github.svg";
import facebookLogo from "../../assets/facebook.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} Supersite, Powered by News API
      </p>
      <div className="footer__links-wrapper">
        <ul className="footer__links">
          <li>
            <a href="#" className="footer__link footer__link--home" target="_blank" rel="noopener noreferrer">
              Home
            </a>
          </li>
          <li>
            <a
              href="https://tripleten.com/"
              className="footer__link footer__link--triplenTen"
              target="_blank"
              rel="noopener noreferrer">
              TriplenTen
            </a>
          </li>
        </ul>
        <ul className="footer__social-links">
          <li>
            <a
              href="https://github.com/kaylieryan"
              className="footer__link footer__link--github"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src={githubLogo}
                alt="GitHub Logo"
                className="footer__link-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              className="footer__link footer__link--facebook"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src={facebookLogo}
                alt="Facebook Logo"
                className="footer__link-icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
