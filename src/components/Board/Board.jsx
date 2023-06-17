import React from "react";
import Card from "../Card/Card";
import "./board.css";

const Board = ({
  level,
  difficulty,
  cardList,
  handleCardClick,
  animateflipp,
}) => {
  return (
    <div
      className={`board  ${
        level == "casual" ? "board-casual" : "board-medium"
      }`}
    >
      {difficulty &&
        cardList?.map((card, index) => (
          <Card
            key={index}
            card={card}
            animateflipp={animateflipp}
            handleCardClick={handleCardClick}
          />
        ))}
    </div>
  );
};

export default Board;
