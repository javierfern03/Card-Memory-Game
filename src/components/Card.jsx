import React, { useEffect, useState } from "react";

const Card = ({
  card,
  index,
  resetGame,
  cardList,
  setCardList,
  setIsWinner,
}) => {
  const [firstCard, setFirstCard] = useState(null);

  // useEffect(() => console.log({ card, firstCard }), [firstCard]);

  
  const handleClick = (index, card,animateflipp) => {
    
    console.log((firstCard))
    //si la carta ya tiene el estatus "match" no hacer nada
    if (card.status == "match") {
      return 0;
    }
    //si firstCard esta vacio guardar su valor y ponerle el estatus "selected"
    if(!firstCard) {
      setFirstCard(cardList[index]); // guardo una carta || pero el valor nunca se guarda nose pq
      card.status = "selected";
      // setCardList([...cardList]);
    } else if (card.id === firstCard.id) {
      console.log("prueba 1");
      return 0;
    } else {
      animateflipp= !animateflipp
      // nunca entra aqui <-----
      console.log("prueba 2");
      card.status = "selected";
      // setCardList([...cardList]);
      validateCards(card);
    }
  };

  // console.log(firstCard)

  const validateCards = (card) => {
    setTimeout(() => {
      if (firstCard.content == card.content) {
        card.status = "match";
        firstCard.status = "match";
      } else {
        firstCard.status = "down";
        card.status = "down";
      }
      // setFirstCard(null);
      setCardList([...cardList]);
      checkWinner();
    }, 200);
  };

  let countMatch = 0;

  const checkWinner = () => {
    cardList.map((card) => {
      if (card.status == "match") countMatch += 1;

      if (countMatch >= 8) {
        resetGame();
        // setIsWinner("winner");
      }
    });
  };

  let animateflipp = false

  return (
    <div className="memo-block" onClick={() => handleClick(index, card, animateflipp)}>
      <div
        className={` memo-block-inner ${
          card.status == "selected" && "memo-block-flipped"
        }`}
      >
        <div className={`card memo-block-front`}></div>
        <div key={index} className={`card ${card.status} memo-block-back`}>
          {card.content}
        </div>
      </div>
    </div>
  );
};

export default Card;
