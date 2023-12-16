import React from "react";
import "../styles/header.scss";
//import worldImg from '../world.jpg'
export default function Header(props) {
  return (
    <div className="hero">
      {/*<img className="hero__image" src={worldImg} alt="The world"/>*/}
      <h1 className="hero__title">Guess the flag game</h1>
    </div>
  );
}
