import React from "react";
import "../styles/modal.scss";

const Modal = ({ onClose, statusModal }) => {
  const showHideClassName = statusModal
    ? "modal modal--show"
    : "modal modal--hide";

  return (
    <div className={showHideClassName}>
      <section className="modal-content-container">
        <h2>Welcome</h2>
        <p>
          The game has 5 rounds. In each round you will be presented with a
          country flag and four options. Guess which country the flag belongs
          to.
        </p>
        <p>After the 5th round you will get your final score.</p>
        <button onClick={onClose}>Play the game</button>
      </section>
    </div>
  );
};

export default Modal;
