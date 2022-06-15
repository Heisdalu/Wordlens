import React, { useEffect, useRef } from "react";
import "./SearchWord.css";

const SearchWord = (props) => {
  const inputRef = useRef();

  const clickHandler = () => {
    props.onClick(inputRef.current.value.trim());
  };

  useEffect(() => {
    inputRef.current.value = props.value
    window.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        clickHandler();
      }
    });
  });

  const dark_mode = props.mode ? "dark_search__label" : "";
  const dark_mode_input = props.mode ? "dark_search__input" : "";
  const dark_searchBar = props.mode ? "dark_searchBar" : "";

  return (
    <section className="search__container">
      <h1 className="search__title">
        Search
        <span>for any word.</span>
      </h1>
      <section className={`searchBar ${dark_searchBar}`}>
        <label className={`search__label ${dark_mode}`}>
          <span className="search_logo">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z"
                stroke="#BEC8DA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 22L29 29"
                stroke="#BEC8DA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <input
            type="search"
            placeholder="What would you like to search for?"
            className={`search__input ${dark_mode_input}`}
            ref={inputRef}
          />
        </label>

        <button type="submit" className="search--button" onClick={clickHandler}>
          Search
        </button>
      </section>
    </section>
  );
};

export default SearchWord;
