import FirstColumn from "./FirstColumn";
import LastColumn from "./LastColumn";
import "./Footer.css";
import SocialMediaIcon from "./SocialMediaIcon";

const Footer = (props) => {
  const dark_footer = props.mode ? "dark_footer_border" : "";
  const dark_footer_logo = props.mode ? "dark_footer_logo" : "";
  const dark_api_link = props.mode ? "dark_link" : "";

  return (
    <footer className={`footer ${dark_footer}`}>
      <FirstColumn />

      <div className="main-footer">
        <h1 className={`footer__logo ${dark_footer_logo}`}>Wordlens</h1>
        <h1 className="desktop__heading">Wordlens</h1>
        <p className="footer__content">
          The API used to serve this data was provided by dictionaryapi.dev,
          click on the link below to read more
        </p>
        <a
          href="https://dictionaryapi.dev/"
          target= '_blank'
          rel="noreferrer"
          className={`footer__api__link ${dark_api_link}`}
        >
          Visit API documentation
        </a>
      </div>

      <div className="sub-footer">
        <h1 className={`desktop__heading2 ${dark_footer_logo}`}>Wordlens</h1>
        <div className="social-media-container">
          <SocialMediaIcon />
          <div className="copyright">
            <span>copyright &copy; 2021 Wordlens.</span>
            <span>All rights reserved.</span>
          </div>
        </div>
        <div className="policy_container">
          <span className="term-use">Terms of use</span>
          <span>Privacy Policy</span>
        </div>
      </div>

      <LastColumn />
    </footer>
  );
};

export default Footer;
