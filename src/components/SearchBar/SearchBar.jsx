import React from "react";
import "./SearchBar.scss";

const SearchBar = ({ handleInput, handleSubmit, value }) => {
  return (
    <form className="navbar__searchbar searchbar">
      <input
        type="text"
        name="searchbar"
        id="searchbar"
        className="searchbar__input"
        placeholder="Add your task here..."
        value={value}
        onChange={handleInput}
      />
      <button className="searchbar__btn" type="submit" onClick={handleSubmit}>
        <div className="searchbar__btn--plus">+</div>
      </button>
    </form>
  );
};

export default SearchBar;
