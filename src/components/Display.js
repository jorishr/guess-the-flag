import React from 'react';
import uuid from 'uuid';
import '../styles/display.scss';

export default function Display(props){
    const { options, answer, handleAnswer, handleReset, targetName } = props;
    //render: while no user answer -> render options
    if(!answer){
        return (
            <>
            <div className="display-container">
                <h2>Which country does this flag belong to?</h2>
                <ul className="options">
                    {options.map(option => {
                        return (
                            <li key={uuid()} className="options__option" 
                                onClick={handleAnswer}>
                            {option.name}
                            </li>
                        )
                    })}        
                </ul>
            </div>
            </>
        )
    } else if(answer === 'correct'){
        return (
            <div className="answer-container">
                <p>You answer was <span>{answer}</span>!</p>
                <button onClick={handleReset}>Play again</button>
            </div>
        )
    } else return (
            <div className="answer-container">
                <p>You answer was <span>{answer}</span>!</p>
                <p>The correct answer was {targetName}</p>
                <button onClick={handleReset}>Play again</button>
            </div>
    )
}