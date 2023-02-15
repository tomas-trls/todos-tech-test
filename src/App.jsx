import { useState } from "react";
import "./App.scss";
import Main from "./containers/Main/Main";
import Nav from "./containers/Nav/Nav";

const App = () => {
  const [input, setInput] = useState("");
  const [cardsArr, setCardsArr] = useState([]);
  const [idCounter, setIdCounter] = useState(0);
  const [checkbox, setCheckbox] = useState(false);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      cardsArr.push({ id: idCounter, input: input, class: "card" });
      setIdCounter(idCounter + 1);
    } else {
      alert("Please enter a valid task name");
    }
    setInput("");
  };

  const handleReset = () => {
    setCardsArr([]);
  };

  const handleDeleteCard = (id) => {
    const filteredCards = cardsArr.filter((card) => card.id !== id);
    setCardsArr(filteredCards);
  };

  const handleCheckBox = (id) => {
    setCheckbox(!checkbox);
    const updateCard = cardsArr.filter((card) => {
      if (checkbox && card.id === id) {
        return (card.class = "card line-through");
      } else {
        return (card.class = "card");
      }
    });
    setCardsArr(updateCard);
  };

  return (
    <div className="App">
      <Nav
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        value={input}
        handleReset={handleReset}
      />
      <Main
        input={input}
        cardsArr={cardsArr}
        handleDeleteCard={handleDeleteCard}
        handleCheckBox={handleCheckBox}
      />
    </div>
  );
};

export default App;
