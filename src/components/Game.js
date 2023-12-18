import React, { useState, useEffect } from "react";
import Options from "./Options";
import Flag from "./Flag";

export default function Game({ totalRounds, setShowModal }) {
  //state
  const [countryList, setCountryList] = useState([]);
  const [options, setOptions] = useState([]);
  const [target, setTarget] = useState({});
  const [answer, setAnswer] = useState();
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);

  useEffect(() => {
    function getGameData() {
      //setTimeout is added so the spinning loader would be visible
      setTimeout(() => {
        const countryList = [];
        fetchData().then((list) => {
          list.map((e) => countryList.push(e));
          const options = pickRandomCountries(countryList, 4);
          const target = options[Math.floor(Math.random() * options.length)];
          setOptions(options);
          setTarget(target);
        });
      }, 1000);
    }
    getGameData();
  }, [countryList]);
  //game logic
  async function fetchData() {
    const url = "https://restcountries.com/v2/all";
    let response = await fetch(url);
    if (response.ok) {
      return await response.json();
    } else return console.log(`HTTP Error: ${response.status}`);
  }

  function pickRandomCountries(arr, n) {
    let result = [];
    while (result.length < n) {
      const random = Math.floor(Math.random() * arr.length);
      const pick = arr[random];
      if (!result.includes(arr[random])) {
        result.push(pick);
      }
    }
    return result;
  }
  //event handlers
  function handleAnswer(e) {
    if (e.target.innerText === target.name) {
      setAnswer("correct");
      setScore(score + 1);
    } else setAnswer("wrong");
  }

  function handleNext() {
    setAnswer("");
    setTarget(undefined);
    setCountryList([]);
    setRound(round + 1);
  }

  function handleGameReset() {
    setAnswer("");
    setTarget(undefined);
    setCountryList([]);
    setScore(0);
    setRound(1);
    setShowModal(true);
  }
  //render
  if (round <= totalRounds && !target) {
    return (
      <div className="loader-container">
        <p>Loading game data...</p>
        <div className="loader"></div>
      </div>
    );
  } else if (round <= totalRounds && target) {
    const { flag, name } = target;
    return (
      <>
        <Options
          options={options}
          answer={answer}
          targetName={name}
          round={round}
          totalRounds={totalRounds}
          handleAnswer={handleAnswer}
          handleNext={handleNext}
        />
        <Flag flag={flag} />
      </>
    );
  } else {
    const verdict = Number((Number(score) / Number(totalRounds)).toFixed(1));
    console.log(
      Number(score / totalRounds),
      Number(score / totalRounds).toFixed(1),
      verdict === 1
    );
    let message;
    switch (true) {
      case verdict === 1.0:
        message = "Perfect! Well done, champ!";
        break;
      case verdict >= 0.8 && verdict < 1.0:
        message = "Well done! Very good!";
        break;
      case verdict >= 0.6 && verdict < 0.8:
        message = "Definitely a decent effort...";
        break;
      case verdict >= 0.5 && verdict < 0.6:
        message = "At least you didn't fail...";
        break;
      case verdict < 0.5:
        message = "You failed! Try again and be better or go hide forever.";
        break;
      default:
        message = "You completed the game but I forgot your score. Oops!";
    }

    return (
      <>
        <div className="final-score">
          <div className="final-score__content-container">
            <h2>GAME OVER</h2>
            <p>
              Your total score is: {score} / {totalRounds}
            </p>
            <p>{message}</p>
            <button className="button" onClick={handleGameReset}>
              Play again
            </button>
          </div>
        </div>
      </>
    );
  }
}
