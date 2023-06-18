import React from "react";
import "./Modal.css";

const Modal = ({ iswinner }) => {
  const modalContent =
    iswinner == "winner" ? (
      <div>
        <h2>You win !!</h2>
        <p>Congratulations, you have successfully completed the game.</p>
      </div>
    ) : (
      <div>
        <h2>you lost</h2>
        <p>You'll do better next time, good luck.</p>
      </div>
    );

  return (
    <div className="modal">
      <div className="modal-content">{modalContent}</div>
    </div>
  );
};

export default Modal;
