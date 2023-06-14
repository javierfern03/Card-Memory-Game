import { useEffect, useState } from "react";
import "./App.css";

import { cards } from "./Card";

import { Timer } from "./components/Timer";
import Card from "./components/Card";

function App() {
  const [difficulty, setDifficulty] = useState(null);
  const [iswinner, setIsWinner] = useState(null);
  const [firstCard, setFirstCard] = useState(null);

  const [cardList, setCardList] = useState(
    cards.sort(() => Math.random() - 0.5)
  );

  const [animateflipp, setAnimateflipp] = useState(true);

  const handleClickFacil = () => {
    setStatus("started");
    setIsWinner(null);
    setDifficulty([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
  };
  const handleClickMedio = () => {
    setDifficulty(16);
  };
  const handleClickDificil = () => {
    setDifficulty(32);
  };

  // const [time, setTime] = useState(0);
  const [status, setStatus] = useState("stopped");

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

  const handleClick = (index, card) => {
    //si la carta ya tiene el estatus "match" no hacer nada
    if (card.status == "match") {
      return 0;
    }
    //si firstCard esta vacio guardar su valor y ponerle el estatus "selected"
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
    }, 500);
  };

  const checkLoser = () => {
    if (time == 20) {
      setIsWinner("loser");
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
  };

  let countMatch = 0;

  const checkWinner = () => {
    cardList.map((card) => {
      if (card.status == "match") countMatch += 1;

      if (countMatch == difficulty.length) {
        resetGame();
        setIsWinner("winner");
      }
    });
  };

  return (
    <div className="game-container">
      <h1 className="title">Card memory Game</h1>
      <h3>{time}</h3>
      <div className="menu">
        <div>
          <h2>selecione la didicultad</h2>
          <button onClick={handleClickFacil}>Casual</button>
          <button onClick={handleClickMedio}>Medium</button>
          <button onClick={handleClickDificil}>dificil</button>
        </div>

        {iswinner &&
          (iswinner == "winner" ? <h2>usted gano</h2> : <h2>usted perdio</h2>)}
      </div>

      <div className="board">
        {difficulty &&
          cardList?.map((card, index) => (
            <div
              key={index}
              className="memo-block"
              onClick={() => (animateflipp ? handleClick(index, card) : "")}
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
          ))}

        {/* juegos aqui */}
      </div>
    </div>
  );
}

export default App;
