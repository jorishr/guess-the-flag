import React, { useState } from "react";
import "./styles/main.scss";
import Header from "./components/Header";
import Game from "./components/Game";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [totalRounds, setTotalRounds] = useState(5);

  /* Form handlers */
  const handleChange = (e) => {
    e.preventDefault();
    setTotalRounds(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  return (
    <>
      <Header />
      <Game totalRounds={totalRounds} setShowModal={setShowModal} />
      <Modal
        showModal={showModal}
        totalRounds={totalRounds}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </>
  );
}

export default App;
