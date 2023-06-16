import React from "react";
import useStartGame from "../../hooks/useStartGame";
import './Header.css';
import usePlaying from "../../hooks/usePlaying";

function Header({ mode, time, handleSelectMode }) {

  return (
    <header>
       <h1 className="title">Card memory game</h1>
        <h3 className="timer">{time}</h3>
        <div className="menu"> 
          <h2>Seleccione la dificultad:</h2>
          <div className="buttons">
            <button className={`${mode === 'low' && 'selected'}`} value="low" onClick={handleSelectMode}>Fácil</button>
            <button className={`${mode === 'medium' && 'selected'}`} value="medium" onClick={handleSelectMode}>Medio</button>
            <button className={`${mode === 'high' && 'selected'}`} value="high" onClick={handleSelectMode}>Dificil</button>
          </div>
        </div>
        {/* <div>
          {iswinner && 
            <h2>`${iswinner === "winner" ? 'Usted gano' : 'Usted perdió'}`</h2>}
        </div> */}
    </header>
  )
}

export default Header;
