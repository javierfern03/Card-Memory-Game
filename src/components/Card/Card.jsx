import React from "react";
import "./card.css";

const Card = ({ card, animateflipp, handleCardClick }) => {
  return (
    <div
      className="memo-block"
      onClick={() => animateflipp && handleCardClick(card)}
    >
      <div
        className={` memo-block-inner ${card.status} ${
          card.status == "selected" && "memo-block-flipped"
        }`}
      >
        <div className={`card memo-block-front`}></div>
        <div className={`card  memo-block-back`}>{card.content}</div>
      </div>
    </div>
  );
};

export default Card;
