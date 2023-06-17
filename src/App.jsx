import "./App.css";
import usePlaying from "./usePlaying";
import Board from "./components/Board/Board";

import { cardsCasual, cardsHard } from "./constants/Card";
const randomComparison = () => Math.random() - 0.5;

function App() {
  const {
    iswinner,
    setIsWinner,
    setStatus,
    animateflipp,
    cardList,
    setCardList,
    handleCardClick,
    difficulty,
    setDifficulty,
    level,
    setLevel,
  } = usePlaying();

  const handleClickSelectDifficulty = (e) => {
    setLevel(e.target.value);
    if (e.target.value == "casual") {
      setDifficulty([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
      setStatus("started");
      setIsWinner(null);
      setCardList(cardsCasual.sort(randomComparison));
    }
    if (e.target.value == "hard") {
      setDifficulty([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
      ]);
      setStatus("started");
      setIsWinner(null);
      setCardList(cardsHard.sort(randomComparison));
    }
  };

  return (
    <div className="game-container">
      {level && (
        <i
          className={`${level == "casual" ? "timer-casual" : "timer-hard"}`}
        ></i>
      )}
      <h1 className="title">Card memory Game</h1>
      {!difficulty && (
        <div className="menu">
          <h2>select the difficulty</h2>
          <div className="buttons">
            <button value={"casual"} onClick={handleClickSelectDifficulty}>
              Casual
            </button>
            <button value={"hard"} onClick={handleClickSelectDifficulty}>
              Hard
            </button>
          </div>

          {iswinner &&
            (iswinner == "winner" ? (
              <div className="final-message">
                <h2 className="final-message__title">You win !!</h2>
                <p>
                  Congratulations, you have successfully completed the game.
                </p>
              </div>
            ) : (
              <div className="final-message">
                <h2 className="final-message__title">you lost</h2>
                <p>You'll do better next time, good luck.</p>
              </div>
            ))}
        </div>
      )}

      <main>
        <Board
          level={level}
          difficulty={difficulty}
          cardList={cardList}
          handleCardClick={handleCardClick}
          animateflipp={animateflipp}
        />
      </main>
    </div>
  );
}

export default App;
