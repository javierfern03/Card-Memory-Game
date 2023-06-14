import React, { useState } from "react";
import "./App.css";

const cardData = [
  {
    id: 1,
    title: "Tarjeta 1",
    content: "Contenido de la tarjeta 1",
    selected: false,
  },
  {
    id: 2,
    title: "Tarjeta 2",
    content: "Contenido de la tarjeta 2",
    selected: false,
  },
  {
    id: 3,
    title: "Tarjeta 3",
    content: "Contenido de la tarjeta 3",
    selected: false,
  },
];

function App() {
  const [cards, setCards] = useState(cardData);

  const handleCardClick = (cardId) => {
    const updatedCards = cards.map((card) => {
      if (card.id === cardId) {
        return { ...card, selected: !card.selected };
      }
      return card;
    });
    setCards(updatedCards);
  };

  return (
    <div className="App">
      <h1>Listado de Tarjetas</h1>
      <div className="card-list">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.selected} ? 'selected' : ''}`}
            onClick={() => handleCardClick(card.id)}
          >
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
