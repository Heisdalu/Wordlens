import React from "react";
import "./SearchWord.css";

const SearchWord = () => {
  return (
    <section className="search__container">
      <h1 className="search__title">
        Search
        <span>for any word.</span>
      </h1>
      <section className="searchBar">
        <label className="search__label">
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

          <input type="text" placeholder="What would you like to search for?" className="search__input" />
        </label>

        <button type="submit" className="search--button">Search</button>
      </section>
    </section>
  );
};

export default SearchWord;
