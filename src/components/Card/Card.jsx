import React from "react";
import "./Card.scss";

const Card = ({ id, input }) => {
  return (
    <>
      <input type="checkbox" name="checkbox" id={id} />
      <p>{input}</p>
      <button>🗑</button>
    </>
  );
};

export default Card;
