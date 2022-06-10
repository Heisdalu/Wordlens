import "./HeaderLogo.css";

const HeaderLogo = (props) => {
  const mode = props.mode ? "dark-header" : "";
  return <h1 className={`header__logo ${mode}`}>Wordlens</h1>;
};

export default HeaderLogo;
