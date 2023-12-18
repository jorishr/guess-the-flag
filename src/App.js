import React, { useState } from "react";
import "./styles/main.scss";
import Header from "./components/Header";
import Game from "./components/Game";
import Modal from "./components/Modal";

function App() {
  const [statusModal, setStatusModal] = useState(true);

  const onClose = () => {
    setStatusModal(false);
  };

  return (
    <>
      <Header />
      <Game />
      <Modal onClose={onClose} statusModal={statusModal} />
    </>
  );
}

export default App;
