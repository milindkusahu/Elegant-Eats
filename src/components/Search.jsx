import React, { useState } from "react";

const SvgComponent = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#828282"
      width="18"
      height="18"
      viewBox="0 0 20 20"
      aria-labelledby="icon-svg-title- icon-svg-desc-"
      role="img"
      className="sc-rbbb40-0 iwHbVQ"
    >
      <title>Search</title>
      <path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path>
    </svg>
  );
};

const Search = ({ handleSearch }) => {
  const [inputText, setInputText] = useState("");

  return (
    <div className="search-container">
      <div>
        <SvgComponent />
      </div>
      <input
        className="input-box"
        placeholder="Search for restaurant, cuisine or a dish"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      ></input>

      <button className="btn" onClick={() => handleSearch(inputText)}>
        Search
      </button>
    </div>
  );
};

export { SvgComponent, Search };
