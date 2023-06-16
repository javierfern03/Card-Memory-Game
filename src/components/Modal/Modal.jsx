import React from "react";
import './Modal.css';

const Modal = ({ isOpen, onClose, isWinner }) => {
  const modalContent = isWinner ? (
    <div>
      <h2>¡Ganaste!</h2>
      <p>Felicidades, has completado el juego exitosamente.</p>
    </div>
  ) : (
    <div>
      <h2>Perdiste</h2>
      <p>Lo siento, no has logrado completar el juego.</p>
    </div>
  );

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          {modalContent}
          <button onClick={onClose}>Cerrar</button>
        </div>
      </div>
    )
  );
};

export default Modal;
