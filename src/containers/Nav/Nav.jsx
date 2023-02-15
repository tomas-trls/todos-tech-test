import React from "react";
import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="navbar__header">
        <h1 className="navbar__title">My Todos</h1>
        <Button />
      </div>
      <SearchBar />
    </div>
  );
};

export default Nav;
