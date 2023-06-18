import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
function usePlaying(cards) {
  const [firstCard, setFirstCard] = useState(null);
  const [animateflipp, setAnimateflipp] = useState(true);
  const [iswinner, setIsWinner] = useState(null);
  const [cardList, setCardList] = useState(cards);
  const [status, setStatus] = useState("stopped");
  const [difficulty, setDifficulty] = useState(null);
  const [level, setLevel] = useState(null);

  const handleCardClick = (card) => {
    if (card.status == "match") {
      return 0;
    }

    if (!firstCard) {
      setFirstCard(card);
      card.status = "selected";
      setCardList([...cardList]);
    } else if (card.id === firstCard.id) {
      return 0;
    } else {
      setAnimateflipp(false);
      card.status = "selected";
      setCardList([...cardList]);
      validateCards(card);
    }
  };

  const validateCards = (card) => {
    setTimeout(() => {
      if (firstCard.content == card.content) {
        card.status = "match";
        firstCard.status = "match";
      } else {
        firstCard.status = "down";
        card.status = "down";
      }

      setFirstCard(null);
      setCardList([...cardList]);
      checkWinner();
      setAnimateflipp(true);
    }, 400);
  };
  const checkLoser = () => {
    if (time == 35 && cardList.length == 16) {
      setIsWinner("loser");
      resetGame();
    }
    
    console.log(cardList.length)
    if (time == 90 && cardList.length == 36) {
      setIsWinner("loser");
      resetGame();
    }
  };

  const checkWinner = () => {
    const countMatch = cardList.filter(
      (card) => card.status === "match"
    ).length;

    if (countMatch === cardList.length) {
      setIsWinner("winner");
      confetti();
      resetGame();
    }
  };

  const resetGame = () => {
    setStatus("stopped");

    cardList?.map((card) => {
      card.status = "down";
      setCardList([...cardList]);
    });

    setDifficulty(null);
    setLevel(null);
  };

  let time = 0;

  useEffect(() => {
    if (status === "started") {
      time = 0;
      time = time + 1;

      const interval = setInterval(() => {
        checkLoser();
        time = time + 1;
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [status]);

  return {
    iswinner,
    setIsWinner,
    animateflipp,
    handleCardClick,
    setStatus,
    cardList,
    setCardList,
    difficulty,
    setDifficulty,
    level,
    setLevel,
  };
}

export default usePlaying;
