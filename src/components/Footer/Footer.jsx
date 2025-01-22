import "./Footer.css";
import facebook from "../../assets/images/facebook.svg";
import github from "../../assets/images/github.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2024 Supersite, Powered by News API</p>
      <div className="footer__links-container">
        <Link to="/" className="footer__link footer__link-home">
          <p className="footer__home">Home</p>
        </Link>
        <a
          href="https://tripleten.com/"
          target="_blank"
          className="footer__link footer__link-tripleten">
          TripleTen
        </a>
        <a
          href="https://github.com/kaylieryan"
          target="_blank"
          className="footer__link footer__link-github">
          <img src={github} alt="" className="footer__icon" />
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          className="footer__link footer__link-facebook">
          <img src={facebook} alt="" className="footer__icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
