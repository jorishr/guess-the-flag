import React from "react";
import uuid from "uuid";
import "../styles/display.scss";

export default function Display(props) {
  const { options, answer, handleAnswer, handleReset, targetName } = props;
  //render: while no user answer -> render options
  if (!answer) {
    return (
      <>
        <div className="options-container">
          <h2 className="options__title">
            Which country does this flag belong to?
          </h2>
          <ul className="options__list">
            {options.map((option) => {
              return (
                <li
                  key={uuid()}
                  className="options__list__option"
                  onClick={handleAnswer}
                >
                  {option.name}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  } else if (answer === "correct") {
    return (
      <div className="answer-container answer-container--correct">
        <div className="answer__text">
          <p className="answer__text__correct">
            You answer was <em>{answer}</em>!
          </p>
          <p>Well Done!</p>
        </div>
        <button className="answer__button" onClick={handleReset}>
          Play again
        </button>
      </div>
    );
  } else
    return (
      <div className="answer-container answer-container--wrong">
        <div className="answer__text">
          <p className="answer__text__wrong">
            You answer was <span>{answer}</span>!
          </p>
          <p>
            The correct answer was <em>{targetName}</em>
          </p>
        </div>
        <button className="answer__button" onClick={handleReset}>
          Play again
        </button>
      </div>
    );
}
