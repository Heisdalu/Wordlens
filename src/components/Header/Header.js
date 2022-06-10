import React from "react";
import "./Header.css";
import HeaderLogo from "./HeaderLogo";

const Header = (props) => {
  const change = () => {
    props.modeHandler();
  };

  const dark_header = props.mode ? 'dark_header_border' : '';
  const darkMode_Toggle = props.mode ? "dark-mode" : "";
  return (
    <header className={`header ${dark_header}`}>
      <HeaderLogo mode={props.mode}/>
      <span className="header__circle" onClick={change}>
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={darkMode_Toggle}
            d="M26 15.5519L22.7078 12.3404L25.5322 8.71396L21.0768 7.57557L21.7093 3.022L17.2821 4.25896L15.5493 0L12.3383 3.29278L8.71251 0.467922L7.57431 4.92401L3.02149 4.29145L4.25825 8.7183L0 10.447L3.29224 13.6596L0.467844 17.286L4.92319 18.4244L4.28424 22.978L8.71035 21.741L10.4431 26L13.6541 22.7072L17.2799 25.5321L18.4181 21.076L22.972 21.715L21.7353 17.2882L26 15.5519ZM15.4746 20.2116C14.0497 20.6964 12.5132 20.7485 11.0587 20.3613C9.60429 19.9742 8.29693 19.1651 7.30141 18.0361C6.30589 16.9072 5.66675 15.5087 5.46451 14.017C5.26227 12.5254 5.50599 11.0072 6.16496 9.65379C6.82393 8.30041 7.86866 7.17238 9.16752 6.41184C10.4664 5.65129 11.9612 5.29225 13.4638 5.37997C14.9663 5.46769 16.4092 5.99823 17.6108 6.90476C18.8124 7.81128 19.7188 9.05322 20.2158 10.4741L20.2321 10.5272C20.492 11.2626 20.6415 12.1096 20.6415 12.9924C20.6415 14.5751 20.1493 16.1187 19.233 17.4091C18.3167 18.6995 17.0218 19.6729 15.5277 20.1943L15.4746 20.2105V20.2116Z"
            fill="#91A2CB"
          />
        </svg>
      </span>
    </header>
  );
};

export default Header;
