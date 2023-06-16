import React from "react";
import Board from "./views/board/Board";
import Header from "./components/Header/Header";
import useStartGame from "./hooks/useStartGame";

function App() {
  const { mode, time, handleSelectMode, started, showModal, setShowModal } = useStartGame();

  return (
    <>
      <Header mode={mode} time={time} handleSelectMode={handleSelectMode} />
      <main>
        <Board started={started} expireTime={showModal} setExpireTime={setShowModal} />
      </main>
    </>
  );
};

export default App;
