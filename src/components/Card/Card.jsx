import React from "react";
import "./Card.scss";

const Card = ({ id, input, className, handleDeleteCard, handleCheckBox }) => {
  return (
    <div className={className}>
      <input
        type="checkbox"
        name="checkbox"
        className="card__checkbox"
        onChange={() => handleCheckBox(id)}
      />
      <p className="card__text">{input}</p>
      <button className="card__delete" onClick={() => handleDeleteCard(id)}>
        🗑
      </button>
    </div>
  );
};

export default Card;
