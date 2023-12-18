import React from "react";
import "../styles/modal.scss";

const Modal = ({ showModal, totalRounds, handleSubmit, handleChange }) => {
  const showHideClassName = showModal
    ? "modal modal--show"
    : "modal modal--hide";

  return (
    <div className={showHideClassName}>
      <section className="modal-content-container">
        <h2>Welcome</h2>
        <p>
          The default game has 5 rounds. In each round you will be presented
          with a country flag and four options. Guess which country the flag
          belongs to.
        </p>
        <p>After the last round you will get your final score.</p>
        <p>
          Do you want to play more or less rounds? Choose a number between 3 and
          100:
        </p>
        <form action="submit" method="get" onSubmit={handleSubmit}>
          <input
            type="number"
            value={totalRounds}
            onChange={handleChange}
            min="3"
            max="100"
          />
          <button type="submit">Start the game</button>
        </form>
      </section>
    </div>
  );
};

export default Modal;
