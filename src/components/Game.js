import React, { useState, useEffect } from "react";
import Options from "./Options";
import Flag from "./Flag";

export default function Game(props) {
  //state
  const [countryList, setCountryList] = useState([]);
  const [options, setOptions] = useState([]);
  const [target, setTarget] = useState({});
  const [answer, setAnswer] = useState(undefined);

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
    e.target.innerText === target.name
      ? setAnswer("correct")
      : setAnswer("wrong");
  }
  function handleReset() {
    setAnswer("");
    setTarget(undefined);
    setCountryList([]);
  }
  //render
  if (!target) {
    return (
      <div className="loader-container">
        <p>Loading game data...</p>
        <div className="loader"></div>
      </div>
    );
  } else {
    const { flag, name } = target;
    return (
      <>
        <Options
          options={options}
          answer={answer}
          targetName={name}
          handleAnswer={handleAnswer}
          handleReset={handleReset}
        />
        <Flag flag={flag} />
      </>
    );
  }
}
