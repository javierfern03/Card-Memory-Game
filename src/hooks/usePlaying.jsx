import { useEffect, useState } from "react";

function usePlaying(cards) {
  const [firstCard, setFirstCard] = useState(null);
  const [isWinner, setIsWinner] = useState(false);
  const [animateFlip, setAnimateFlip] = useState(true);
  const [cardList, setCardList] = useState(cards);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (card) => {
    if (card.status === "match") {
      return;
    }

    if (!firstCard) {
      setFirstCard(card);
      setCardStatus(card.id, "selected");
    } else if (card.id !== firstCard.id) {
      setAnimateFlip(false);
      setCardStatus(card.id, "selected");
      validateCards(card);
    } 
  };

  const setCardStatus = (cardId, status) => {
    setCardList((prevCardList) =>
      prevCardList.map((card) =>
        card.id === cardId ? { ...card, status } : card
      )
    );
  };

  const validateCards = (card) => {
    setTimeout(() => {
      if (firstCard.content === card.content) {
        setCardStatus(card.id, "match");
        setCardStatus(firstCard.id, "match");
      } else {
        setCardStatus(card.id, "down");
        setCardStatus(firstCard.id, "down");
      }
      setFirstCard(null);
      checkWinner();
      setAnimateFlip(true);
    }, 500);
  };

  const checkWinner = () => {
    const countMatch = cardList.filter((card) => card.status === "match")
      .length;
    if (countMatch === cardList.length) {
      setIsWinner(true);
      setShowModal(true);
    }
  };

  useEffect(() => {
    checkWinner();
  }, [cardList]);

  return { cardList, animateFlip, handleCardClick, isWinner, showModal, setShowModal };
}

export default usePlaying;
