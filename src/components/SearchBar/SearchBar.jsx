import React from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <>
      <input
        type="text"
        name="searchbar"
        id="searchbar"
        className="navbar__searchbar searchbar"
        placeholder="Add your task here..."
      />
      <button>+</button>
    </>
  );
};

export default SearchBar;
