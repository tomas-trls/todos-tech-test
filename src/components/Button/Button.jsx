import React from "react";
import "./Button.scss";

const Button = ({ handleReset }) => {
  return (
    <button className="navbar__button button" onClick={handleReset}>
      Reset
    </button>
  );
};

export default Button;
