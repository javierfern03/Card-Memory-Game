import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { cards } from "../../constants/Card";
import usePlaying from "../../hooks/usePlaying";
import './Board.css';
import Modal from "../../components/Modal/Modal";

const randomComparison = () => Math.random() - 0.5;

function Board({ started, expireTime, setExpireTime }) {
  const {
    cardList, animateFlip, handleCardClick, isWinner, showModal, setShowModal,
  } = usePlaying(() => cards.sort(randomComparison));

  return (
    <div className="board">
      {started ? (
        cardList.map((card, index) => (
          <Card
            value={card}
            index={index}
            onClick={handleCardClick}
            animateflipp={animateFlip}
          />
        ))
      ) : (
        <h3>Debes iniciar el juego</h3>
      )}
      <Modal isOpen={showModal || expireTime} onClose={() => { setShowModal(false); setExpireTime(false); }} isWinner={isWinner} />
    </div>
  );
}

export default Board;
