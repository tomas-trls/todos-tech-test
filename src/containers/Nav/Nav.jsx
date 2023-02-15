import React from "react";
import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Nav.scss";

const Nav = ({ handleInput, handleSubmit, value, handleReset }) => {
  return (
    <div className="navbar">
      <div className="navbar__header">
        <h1 className="navbar__title">My Todos</h1>
        <Button handleReset={handleReset} />
      </div>
      <SearchBar
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        value={value}
      />
    </div>
  );
};

export default Nav;
