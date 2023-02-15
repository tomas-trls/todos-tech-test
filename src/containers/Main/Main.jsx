import React from "react";
import Card from "../../components/Card/Card";
import "./Main.scss";

const Main = ({ cardsArr, handleDeleteCard, handleCheckBox }) => {
  const cardsJSX = cardsArr.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        input={card.input}
        className={card.class}
        handleDeleteCard={handleDeleteCard}
        handleCheckBox={handleCheckBox}
      />
    );
  });
  return <>{cardsJSX}</>;
};

export default Main;
